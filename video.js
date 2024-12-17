const {chromium}= require ("playwright");
(async () => {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext({
      recordVideo:{dir:'./video/'}  
    })
    const page = await browser.newPage();
    await page .goto ("https://www.youtube.com");
    await page.locator("//input[@id='search']").fill("songs");
    await page.waitForSelector("//button[@id='search-icon-legacy']",{visible:true});
    await page.hover("//button[@id='search-icon-legacy']");
  
    
  })();