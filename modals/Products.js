import mongoose from "mongoose";
import { Schema } from "mongoose";



const product = new Schema({
name : String,
price: Number,
catergory : String,
Image: [string]
});
export default product;