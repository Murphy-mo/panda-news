import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const CHROME = 'C:/Users/96446/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe';

(async () => {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true });
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  page.on('pageerror', e => console.log('[PAGEERROR]', String(e)));
  page.on('console', m => { if (m.type() === 'error') console.log('[CONSOLE]', m.text()); });

  await page.goto('http://localhost:8848/submit.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(600);
  await page.fill('#title', 'DIAG投稿');
  await page.fill('#nick', 'DIAG');
  await page.fill('#content', '诊断内容');
  await page.check('#ck1'); await page.check('#ck2');
  await page.click('#btnSubmit');
  await page.waitForTimeout(400);
  const subsNow = await page.evaluate(() => localStorage.getItem('wb_panda_v1_subs'));
  const arr = JSON.parse(subsNow || '[]');
  console.log('[提交后 subs 数量]', arr.length);
  console.log('[第一��]', JSON.stringify(arr[0]).slice(0, 200));

  await page.goto('http://localhost:8848/admin.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);
  await page.fill('#pwd', 'panda2024');
  await page.click('#btnLogin');
  await page.waitForTimeout(600);
  console.log('[cms visible]', await page.$eval('#cmsView', e => e.style.display));
  await page.click('#sideNav [data-sec="subs"]');
  await page.waitForTimeout(700);
  console.log('[hash]', await page.evaluate(() => location.hash));
  const lsInfo = await page.evaluate(() => {
    const raw = localStorage.getItem('wb_panda_v1_subs');
    const arr = JSON.parse(raw || '[]');
    return { lsCount: arr.length, statuses: arr.map(s => s.status).join(','), first: arr[0] && arr[0].title };
  });
  console.log('[admin页 localStorage]', JSON.stringify(lsInfo));
  const dbInfo = await page.evaluate(() => {
    const DB = window.PandaDB;
    const all = DB.all('subs');
    return { dbCount: all.length, statuses: all.map(s => s.status).join(','), titles: all.map(s => s.title).slice(0, 8).join(' | ') };
  });
  console.log('[admin页 DB.all(subs)]', JSON.stringify(dbInfo));
  const html = await page.$eval('#secContent', e => e.innerHTML);
  console.log('[secContent 长度]', html.length);
  const tbody = await page.$eval('#secContent tbody', e => e.innerHTML).catch(() => 'NO TBODY');
  console.log('[tbody]', tbody.replace(/\s+/g, ' ').slice(0, 800));
  console.log('[approve 按钮数]', await page.$$eval('#secContent [data-x="approve"]', e => e.length));
  await browser.close();
})();
