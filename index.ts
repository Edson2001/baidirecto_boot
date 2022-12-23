import express from "express"

import dotenv from "dotenv"

dotenv.config()

const app = express()

const portApp = process.env.ENV_PORT_APP || 3030

app.get("/", (req, res)=>{
    return res.json({
        server: 'on'
    })
})

app.listen(portApp, ()=>console.log(`servidor rodando na porta ${portApp}`))