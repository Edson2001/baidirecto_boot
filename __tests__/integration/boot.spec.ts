import core from "../../src/controllers/boot"


describe("test boot", ()=>{

    it("get deposit return", async ()=>{
    
        const app = await core()
        await app.start()
        await app.login({
            user: process.env.ENV_USER_BAI || '',
            password: process.env.ENV_PASSOWRD_BAI || ''
        })
        const deposit = await app.getDepositOrder()
        expect(deposit).toBe(4)
    })

})