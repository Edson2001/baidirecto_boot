import { Router } from "express"

import core from "../controllers/boot"

const route = Router()

route.get('/', async (req, res)=>{
    
    const app = await core()

    await app.start()

    await app.login({
        user: process.env.ENV_USER_BAI || '',
        password: process.env.ENV_PASSOWRD_BAI || ''
    })

    return res.json({
        bai: {
            depositOrder: await app.getDepositOrder()
        }
    })

})

export default route