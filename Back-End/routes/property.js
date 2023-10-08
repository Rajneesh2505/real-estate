const express=require("express")
const route=express.Router()
const property=require("../schema/property")

route.post("/detail",(req,res)=>{
property.create({propertyType:req.body.propertyType,price:req.body.price,propertyAge:req.body.propertyAge,description:req.body.description,nagotable:req.body.nagotable,
    ownership:req.body.ownership,approved:req.body.approved,bankLoan:req.body.bankLoan,length:req.body.length,breath:req.body.breath,
    totalArea:req.body.totalArea,noOfBHK:req.body.noOfBHK,attached:req.body.attached,furnished:req.body.furnished,lift:req.body.lift,
    facing:req.body.facing,areaUnit:req.body.areaUnit,noOfFloor:req.body.noOfFloor,westernToilet:req.body.westernToilet,carParking:req.body.carParking,
    electricity:req.body.electricity,name:req.body.name,mobileNo:req.body.mobileNo,postedBy:req.body.postedBy,saleType:req.body.saleType,
    featuredPackage:req.body.featuredPackage,PPDpackage:req.body.PPDpackage,email:req.body.email,area:req.body.area,address:req.body.address,
    latitude:req.body.latitude,city:req.body.city,pincode:req.body.pincode,landmark:req.body.landmark,longitude:req.body.longitude}).then(()=>{
        res.status(200).send("Property Detail Added SuccessFully")
    }).catch((err)=>{
        res.staus(400).send("Data Not Added")
    })
})

route.get("/detail",(req,res)=>{
    property.find().then((userdata)=>{
         res.send(userdata)
     }).catch((err)=>{
         res.send(err.message)
     })
 })

module.exports=route
   
   




    

