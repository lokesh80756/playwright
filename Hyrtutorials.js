const {chromium}= require ("playwright");
(async () => {
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html');
    await page.selectOption("#course",{value :'Javascript'})
    await page.selectOption("#course",{label : 'Dot Net'})
    await page.selectOption("#course",{index:3})
    const options= await page.evaluate(()=>{
        const select= document.queryselector ("#course");
        return Array.from(option,select).map(option=>option.text);
    })
    console.log(options);
})();