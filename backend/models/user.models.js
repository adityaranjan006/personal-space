import mongoose, { Schema } from 'mongoose'
import bcryptjs from 'bcryptjs'
const userSchema = new Schema({
    
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Password Required"],
    },

},{timestamps:true});




export const User= mongoose.model("User",userSchema);