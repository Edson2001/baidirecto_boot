import { Request, Response } from "express"

import puppteer from "puppeteer"

export default {

    async initBoot(req: Request, res: Response){

        const browser = await  puppteer.launch({
            headless: true,
            executablePath: '/chromium/lib'
        })

        const page = await browser.newPage()

        await page.goto('https://google.com')

        return res.json({
            server: 'on'
        })

    }

}