// 熊猫资讯 QA：真实 Chromium 验证前台+后台全流程
// 用法: NODE_PATH=<work-buddy>/node_modules node scripts/qa-panda.mjs
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const CHROME = 'C:/Users/96446/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe';
const URL = process.env.PANDA_URL || 'http://localhost:8848/';
let pass = 0, fail = 0;
function check(name, ok, extra = '') { console.log((ok ? '✅' : '❌') + ' ' + name + (extra ? '  [' + extra + ']' : '')); ok ? pass++ : fail++; }

(async () => {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 1600 } });
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', e => errs.push(String(e)));

  // ---------- 1. 首页 ----------
  await page.goto(URL, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(900);
  check('首页导航渲染', await page.$$eval('#navLinks a', a => a.length) >= 9);
  check('首页今日主角卡片', (await page.$('#todayStar .star-card-big')) !== null);
  const starName = await page.$eval('#todayStar .star-card-big h3', e => e.textContent.trim()).catch(() => '');
  check('今日主角有名字', starName.length > 0, starName);
  check('首页大事件快讯', (await page.$$eval('#topEvents .card', e => e.length)) >= 3);
  check('首页最新科普', (await page.$$eval('#topArticles .card', e => e.length)) >= 2);
  check('首页场馆动态', (await page.$$eval('#venueNews .card', e => e.length)) >= 2);
  check('首页精选投稿', (await page.$$eval('#topSubs .card', e => e.length)) >= 1);

  // ---------- 2. 今日主角页 ----------
  await page.goto(URL + 'star.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(800);
  check('主角页大卡', (await page.$('#todayCard .star-card-big')) !== null);
  const tlCount = await page.$$eval('#timeline .tl-item', e => e.length);
  check('主角成长大事记>0', tlCount > 0, tlCount + '条');
  check('主角趣闻>0', (await page.$$eval('#stories .card', e => e.length)) > 0);
  check('主角图库4图', (await page.$$eval('#gallery .panda-avatar', e => e.length)) === 4);
  await page.click('#btnPrev'); await page.waitForTimeout(500);
  check('昨日主角可切换', (await page.$eval('#todayCard .star-flag', e => e.textContent)) !== null);

  // ---------- 3. 档案库 ----------
  await page.goto(URL + 'archive.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(700);
  const totalP = await page.$$eval('#grid .card', e => e.length);
  check('档案库卡片>8', totalP > 8, totalP + '只');
  await page.fill('#kw', '福宝');
  await page.click('#btnSearch'); await page.waitForTimeout(500);
  const filtered = await page.$$eval('#grid .card', e => e.length);
  check('搜索"福宝"过滤', filtered >= 1 && filtered < totalP, filtered + '只');
  await page.click('#btnRandom'); await page.waitForTimeout(900);
  check('随机档案跳详情', /panda-detail\.html\?id=/.test(page.url()), page.url());

  // ---------- 4. 熊猫详情 ----------
  await page.waitForTimeout(600);
  check('详情页谱系号展示', (await page.$eval('#head', e => e.textContent.includes('谱系号'))) === true);

  // ---------- 5. 场馆页 ----------
  await page.goto(URL + 'zoo.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(700);
  const vAll = await page.$$eval('#venueGrid .card', e => e.length);
  check('场馆全部>14', vAll > 14, vAll + '个');
  await page.click('#regionTabs [data-region="overseas"]'); await page.waitForTimeout(500);
  const vOv = await page.$$eval('#venueGrid .card', e => e.length);
  check('海外场馆筛选', vOv > 0 && vOv < vAll, vOv + '个');
  await page.click('#venueGrid [data-follow]'); await page.waitForTimeout(400);
  check('场馆可关注', (await page.$$eval('#venueGrid .follow-btn.liked', e => e.length)) >= 1);

  // ---------- 6. 投稿页（协议强制） ----------
  await page.goto(URL + 'submit.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(600);
  await page.fill('#title', 'QA测试投稿');
  await page.fill('#nick', 'QA测试员');
  await page.fill('#content', '这是一条自动化测试投稿内容，验证强制协议与审核流程。');
  await page.click('#btnSubmit'); await page.waitForTimeout(400);
  const blocked = await page.evaluate(() => document.getElementById('toast').textContent);
  check('未勾协议被拦截', blocked.includes('协议'), blocked);
  await page.check('#ck1'); await page.check('#ck2');
  await page.click('#btnSubmit'); await page.waitForTimeout(2400);
  check('勾协议后提交成功并跳转', /community\.html/.test(page.url()), page.url());

  // ---------- 7. 社区（点赞+评论提交） ----------
  await page.waitForTimeout(700);
  const likeBefore = await page.$eval('[data-like]', e => e.textContent).catch(() => '');
  await page.click('[data-like]'); await page.waitForTimeout(400);
  check('点赞生效', (await page.$$eval('.like-btn.liked', e => e.length)) >= 1, likeBefore.trim());
  await page.click('[data-comment]'); await page.waitForTimeout(300);
  await page.fill('[data-cinput]', 'QA评论测试，待审核');
  await page.click('[data-csend]'); await page.waitForTimeout(400);
  const cmtToast = await page.evaluate(() => document.getElementById('toast').textContent);
  check('评论提交提示', cmtToast.includes('审核'), cmtToast);

  // ---------- 8. 后台 CMS ----------
  await page.goto(URL + 'admin.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(600);
  await page.fill('#pwd', 'wrongpwd');
  await page.click('#btnLogin'); await page.waitForTimeout(400);
  check('错误密码被拒', (await page.$('#loginView')).isVisible());
  await page.fill('#pwd', 'panda2024');
  await page.click('#btnLogin'); await page.waitForTimeout(600);
  check('正确密码进入CMS', (await page.$('#cmsView')).isVisible());
  check('仪表盘统计卡', (await page.$$eval('#secContent .grid-4 .card', e => e.length)) >= 6);

  await page.click('#sideNav [data-sec="subs"]'); await page.waitForTimeout(500);
  const pendingBtns = await page.$$eval('#secContent [data-x="approve"]', e => e.length);
  check('投稿审核列表有待审项', pendingBtns >= 1, pendingBtns + '条待审');
  // 审核第一条
  await page.click('#secContent [data-x="approve"]'); await page.waitForTimeout(500);
  check('审核通过生效', (await page.$$eval('#secContent .tag.green', e => e.some(x => x.textContent.includes('已通过')))) === true);

  await page.click('#sideNav [data-sec="comments"]'); await page.waitForTimeout(400);
  check('评论审核页渲染', (await page.$('#secContent .cms-table')) !== null);

  await page.click('#sideNav [data-sec="articles"]'); await page.waitForTimeout(400);
  const artRows = await page.$$eval('#secContent tbody tr', e => e.length);
  check('科普文章列表>8', artRows > 8, artRows + '行');
  await page.click('#sideNav [data-sec="star"]'); await page.waitForTimeout(400);
  check('今日主角设置页', (await page.$('#secContent #saveStar')) !== null);
  await page.click('#sideNav [data-sec="settings"]'); await page.waitForTimeout(400);
  check('站点设置页', (await page.$('#secContent #saveSettings')) !== null);

  // ---------- 控制台错误 ----------
  check('全程无 JS 报错', errs.length === 0, errs.slice(0, 3).join(' | '));

  await browser.close();
  console.log('\n===== 结果: ' + pass + ' 通过 / ' + fail + ' 失败 =====');
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error('QA 异常:', e); process.exit(2); });
