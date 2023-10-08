const express=require("express")
const route=express.Router()
const user=require("../schema/user-schema")
const {gensalt}=require("../utility")
const bcrypt=require("bcrypt")

route.post("/signup",async(req,res)=>{
  user.find({mailID:req.body.mailID}).then((data)=>{
    if(data.length===0){
     gensalt(req.body.Password).then((hash)=>{
        if(req.body.Password===req.body.confirmPassword){
          user.create({mailID:req.body.mailID,Password:hash,confirmPassword:hash}).then(()=>{
            res.status(200).send(`${req.body.mailID} Added`)
         }).catch((err)=>{
            res.status(400).send(err.message)
         })
        }else{
          res.status(400).send("password not match")
        }
      })  
    }else{
      res.status(400).send(`${req.body.mailID} Already Exist`)
    }
  })
})

route.post("/login",(req,res)=>{
 user.find({mailID:req.body.mailID}).then((data)=>{
  if(data.length){
   bcrypt.compare(req.body.Password,data[0].Password).then((value)=>{
    if(value){
      res.status(200).send("log in successfully")
    }else{
      res.status(400).send("password not match")
    }
   })
  }else{
    res.status(400).send("mail id not match")
  }
 })
  })
  
    

module.exports=route

