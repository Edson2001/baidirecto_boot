import { Request, Response } from "express"

export default {

    async initBoot(req: Request, res: Response){

        return res.json({
            server: 'on'
        })

    }

}