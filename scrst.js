const {chromium}= require ("playwright");
(async () => {
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page .goto ("https://www.facebook.com");
    await page.screenshot({path:'screen.png',fullpage:true})
    const photo = await page.locator("//img[@class='fb_logo _8ilh img']");
    
    await photo.screenshot({path:'screen.png',})
})();