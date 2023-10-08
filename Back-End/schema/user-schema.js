const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    mailID:{
        type:String
    },
    Password:{
        type:String
    },
    confirmPassword:{
        type:String
    }
})

const userModel=mongoose.model("newUsers",userSchema)
module.exports=userModel