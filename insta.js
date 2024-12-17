const {chromium} = require ('playwright');
(async ()=>{
    const browser = await chromium.launch({headless :false});
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com');
    const  title =await page .title();
    console.log(title);
    const user = await page.locator("//input[@aria-label ='Phone number, username, or email']");
    await user.fill("lokesh");
    const pass = await page.locator("//input[@aria-label='Password']");
    await pass.fill("uhiqhid");
})();