import express from "express"
import route from "./src/routes"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const app = express()

app.use(cors())
app.use(route)

const portApp = process.env.ENV_PORT_APP || 3030

app.listen(portApp, ()=>console.log(`servidor rodando na porta ${portApp}`))