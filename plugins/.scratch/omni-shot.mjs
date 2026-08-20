import { chromium } from '/Users/x/.camofox-browser/node_modules/playwright-core/index.mjs';
const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox']
});
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text().slice(0,250)); });
page.on('pageerror', err => errors.push('PAGEERROR: ' + err.message.slice(0,350)));
await page.goto('http://127.0.0.1:55848/', { waitUntil: 'load', timeout: 25000 }).catch(e => errors.push('NAV: '+e.message));
await page.waitForTimeout(8000);
console.log('TITLE:', await page.title().catch(()=> '?'));
const body = await page.evaluate(() => document.body ? document.body.innerText.slice(0,900) : 'NO BODY').catch(e=>'EVAL:'+e.message);
console.log('BODY:', JSON.stringify(body));
console.log('ERRORS:', JSON.stringify(errors.length ? errors.slice(0,20) : 'none'));
try {
  await page.screenshot({ path: '/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh/plugins/.scratch/omni-ui.png', timeout: 15000 });
  console.log('SHOT: ok');
} catch(e) { console.log('SHOT: fail ' + e.message.slice(0,100)); }
await browser.close();
