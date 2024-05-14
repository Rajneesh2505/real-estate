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
mongoose.connect("mongodb+srv://Rajneesh:Rajneesh@insta.wzmicqy.mongodb.net/real-estate?retryWrites=true&w=majority&appName=insta")

//port
const PORT =process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("server start")
})


//middleWare
app.use("/",UserRoutes)
app.use("/property",propertyModel)