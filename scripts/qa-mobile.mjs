import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
(async () => {
  const browser = await chromium.launch({ executablePath: 'C:/Users/96446/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe', headless: true });
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', e => errs.push(String(e)));
  for (const p of ['index.html', 'zoo.html', 'star.html', 'community.html', 'admin.html']) {
    await page.goto('http://localhost:8848/' + p, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(600);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
    console.log((overflow ? '❌ 横向溢出' : '✅ 无溢出') + ' ' + p);
    await page.click('#navBurger').catch(() => {});
    await page.waitForTimeout(300);
    const navOpen = await page.$eval('#navLinks', e => e.classList.contains('open')).catch(() => false);
    console.log((navOpen ? '✅ 汉堡菜单展开' : '⚠️ 汉堡菜单') + ' ' + p);
  }
  console.log(errs.length ? '❌ JS错误: ' + errs.join('|') : '✅ 移动端无 JS 错误');
  await browser.close();
})();
