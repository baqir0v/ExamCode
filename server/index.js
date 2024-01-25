import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import router from "./src/router/productRouter.js"

const app = express()

app.use(express.json())
app.use(cors())

dotenv.config()
const port= process.env.PORT
const password = process.env.PASSWORD
const url = process.env.URL.replace("<password>",password)

app.use("/api/products",router)

mongoose.connect(url).then(res=>console.log("Db Connected")).catch(err=>console.log(err))

app.listen(port,()=>{
    console.log("Server Connected");
})