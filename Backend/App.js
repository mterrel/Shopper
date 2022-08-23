
import express, { application } from "express"
import dotenv from "dotenv"
import { products } from "./Data/products.js"
import { connectDb } from "./Config/DbConnect.js"

const server = express()
dotenv.config()
connectDb()

const port = process.env.PORT

server.get("/api/product", (req, res) => {
    try {
        res.status(200).json(products)
    } catch (error) {
        console.log(error)
    }
})
/// 
// server.get("/api/product", (req, res) => {
//     try {
//         res.status(200).json(products)
//     } catch (error) {
//         console.log(error)
//     }
// })


server.listen(port,()=>{console.log(`connection running on port ${port}`)})