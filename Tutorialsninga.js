const {chromium} = require ('playwright'); 
(async ()=>{
    const browser = await chromium.launch({headless :false}); 
    const page = await browser.newPage();
    await page.goto('https://app.phptravels.com/login');
    const  title =await page .title();
    console.log(title);
    const user = await page.locator("#email");
    await user.fill("lokesh");
    const pass = await page.locator("//input[@placeholder='Password']");
    await pass.fill("uhiqhid");
    const login = await page.locator("#submit");
    await login .click();
})();