const {chromium}=require('playwright');
(async () => {
    const browser = await chromium.launch ({headless:false});
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto("https://www.hyrtutorials.com/p/window-handles-practice.html");
     console.log(await page1.title());
    //const page2 = await context1 .newPage();
    //page2 .goto("https://www.instagram.com");
    // const context2 = await browser.newContext(); 
    // const page2 = await context2.newPage();
    // page2.goto("https://www.instagram.com");
    page1.click("button#newWindowBtn");
    const pagees = context1 .pages();
    const win = pagees[0];
    await win .bringToFront();
    for(const p of pagees){
        console.log(await p.title());
    }
})();