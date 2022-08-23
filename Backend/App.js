
import express from "express"
import dotenv from "dotenv"

const server = express()
dotenv.config()

const port = process.env.PORT


server.listen(port,()=>{console.log(`connection running on port ${port}`)})