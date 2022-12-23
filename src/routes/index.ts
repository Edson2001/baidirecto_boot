import { Router } from "express"

import boot from "../controllers/boot"

const route = Router()

route.get('/', boot.initBoot)

export default route