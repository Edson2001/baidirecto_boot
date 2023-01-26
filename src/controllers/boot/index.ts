import puppteer from "puppeteer-extra"
import puppeteerExtraPlugin from "puppeteer-extra-plugin-stealth"

puppteer.use(puppeteerExtraPlugin())

async function core(){
    
    const browser = await  puppteer.launch({
        headless: false,
        args: ['--no-sandbox', '--disable-web-security',],
        ignoreHTTPSErrors: true,  
        executablePath: process.env.ENV_EXECUTABLEPATH || "C:/Program Files/Google/Chrome/Application/chrome.exe"
    })

    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    
    async function start(){

        console.log("[boot]: boot iniciado")

        await page.goto('https://ib.bancobai.ao', {
            waitUntil: "networkidle0",
        })
        
        await page.waitForSelector("#app > div.scroll-container.no-menu > div.login-wrapper > div.front-content-container > div.container-with-scroll-space > div > div.logo-wrapper > div")
    }

    async function login({user, password}: {user?: string , password?: string}){
        console.log("[boot]: login iniciado")
        
        if(user != '' || password != ''){
            
            await page.type("div.input-box.username-input.error-dark-background > input", user!)
            await page.type("input[type=password]:nth-child(1)",  password!)
            await page.click("#app > div.scroll-container.no-menu > div.login-wrapper > div.front-content-container > div.container-with-scroll-space > div > button.login-button.login-button") 
            
            await page.screenshot({path: "log.png"})
    
            const closePopup = await page.waitForSelector("div.popup-modal > div.close-icon", {
                timeout: 50000
            })
            
            if(closePopup){
                console.log("[boot]: login success")
                closePopup.click()
            } 

        }else{
            console.log("[boot error]: password and user is empty")
        }
    }

    async function getDepositOrder(){
        console.log("[boot]: get deposit order")
        const orderDeposit = await page.$eval("#app > div.scroll-container > div.app-content > div.content-container.container.translate-me-top.ready-to-enter > div.table-container.accounts-table > div.simple-table > a:nth-child(2) > div > div:nth-child(4) > span", (text)=> text.innerHTML)
        return orderDeposit
    }

    async function stop(){
        console.log("[boot]: boot stoped")
        await browser.close()

    }

    return {
        start,
        login,
        stop,
        getDepositOrder
    }
} 

export default core