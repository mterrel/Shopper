import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { users } from "./Data/Users.js"
import { products } from "./Data/products.js"
import { User } from "./Model/UserModel.js"
import { Order } from "./Model/OderModel.js"
import { connectDb } from "./Config/DbConnect.js"
import {Product} from "./Model/ProductModel.js"

dotenv.config();
connectDb();

const importData = async () => {
    try {
        await Product.deleteMany();
        await User.deleteMany();
        await Order.deleteMany();
      const createdUsers=  await User.insertMany(users);
        const adminUser = createdUsers[0]._id;
        const sampleProducts = products.map(product => {
            return{...product, user:adminUser}
        })
        await Product.insertMany(sampleProducts);
        console.log("data uploaded")
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
const destroyData = async () => {
    try {
        await Product.deleteMany();
        await User.deleteMany();
        await Order.deleteMany();

        console.log("data deleted")
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
if (process.argv[2] === "-d") {
    destroyData()
} else {
    importData()
}