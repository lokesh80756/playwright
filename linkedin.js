const {chromium} = require ('playwright'); 
(async ()=>{
    const browser = await chromium.launch({headless :false}); 
    const page = await browser.newPage();
    await page.goto('https://www.linkedin.com/login');
    const  title =await page .title();
    console.log(title);
    const user = await page.locator("#session_key");
    await user.fill("lokesh");
    const pass = await page.locator("//input[@required validation ='password']");
    await pass.fill("uhiqhid");
    
})();


