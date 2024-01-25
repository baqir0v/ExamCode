import mongoose from "mongoose";

const productModel =  new mongoose.Schema({
    title:{type:String},
    image:{type:String},
    price:{type:Number}
})

export default mongoose.model("product",productModel)