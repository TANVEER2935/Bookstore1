import mongoose from "mongoose";

const userschema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const User=mongoose.model("user",userschema);
export default User;