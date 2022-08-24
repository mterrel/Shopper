import express from "express"
import { fetchProductsHandler } from "../Controller/ProductController.js"

const productRouter = express.Router()

productRouter.route("/").get(fetchProductsHandler)

export {productRouter}