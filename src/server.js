import express from "express"

const app = express()

app.get("/", (req, res)=>{
   
    return res.json({
        server: 'on'
    })
    
})

app.listen(3030, ()=>console.log("servidor rodando na porta 3030"))