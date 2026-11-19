import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js"
dotenv.config()

const app = express()

const PORT = process.env.PORT

app.get('/',(req,res) => {
    return res.json({message : "Server started"})
})



app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
    connectDb()
})