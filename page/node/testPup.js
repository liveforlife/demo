const PCR = require("puppeteer-chromium-resolver")
const URL = 'http://www.my100000.com:8082/news/details/975'
const fs  = require('fs')

const fn = async () =>{
    const pcr = await PCR();
    const browser = await pcr.puppeteer.launch({
        headless:true,
        args:['--no-sandbox'],
        executablePath:pcr.executablePath
    }).catch((error) =>{
        console.log(error)
    })
    let page = await browser.newPage();
    await page.goto(URL,{
        timeout:10000000,
        waitUntil:'networkidle0'
    });
    console.log('hn.pdf')
    await page.pdf({path: 'hn.pdf', format: 'A4'});
    console.log('save youka.html')
    let content =await page.content();
    let writerStream = fs.createWriteStream('youka.html');
    writerStream.write(content,'UTF-8')
    writerStream.end()
    console.log('close browser')
    browser.close();
}
 
fn()