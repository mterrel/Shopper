import express from "express"
import { fetchProductsHandler,fetchSingleProductHandler } from "../Controller/ProductController.js"

const productRouter = express.Router()

productRouter.route("/").get(fetchProductsHandler)
productRouter.route("/:id").get(fetchSingleProductHandler)

export {productRouter}