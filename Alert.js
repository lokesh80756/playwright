const { chromium } = require("playwright");
(async () => {
    const browser= await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page .goto('https://demo.automationtesting.in/Alerts.html')
page.on('dailog',async (dailog) => {
    const mess = dailog.message();
    const type = dailog.type();
    console.log(mess);
    console.log(type);
    dailog.accept("unauthorized dailog");
})
page.locator("(//a[@class ='analystic'])[2]").click();
page.locator("//button[@onclick='confirmbox()']").click();
})()