import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true
    },
    items:[
        {
            car:{
                type :mongoose.Schema.Types.ObjectId,
                ref:"Car",
                required:true
            },
            qty :{
                type:Number,
                default:1
            }
        }
    ]
},{timestamps:true});

export default mongoose.model("Cart",cartSchema);