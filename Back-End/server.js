const express=require("express")
const app=express()
const mongoose=require("mongoose")
const UserRoutes=require("./routes/user-routes")
const propertyModel=require("./routes/property")
const cors=require("cors")
const multer=require("multer")()

//body Parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(multer.array())

//DataBase
mongoose.connect("mongodb://127.0.0.1:27017/real-estate")

//port
app.listen(3000,(err,data)=>{
console.log("server")

})


//middleWare
app.use("/",UserRoutes)
app.use("/property",propertyModel)