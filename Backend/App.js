
import express, { application } from "express"
import dotenv from "dotenv"
import { products } from "./Data/products.js"
import { connectDb } from "./Config/DbConnect.js"
import { notFound, errorHandler } from "./Middleware/ErrorMiddleware.js"
import { productRouter } from "./Routes/ProductRoutes.js"

const server = express()
dotenv.config()
connectDb()

const port = process.env.PORT

server.use("/api/products",productRouter)

server.use(notFound);
server.use(errorHandler);


server.listen(port,()=>{console.log(`connection running on port ${port}`)})