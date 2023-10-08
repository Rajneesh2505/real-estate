const user=require("./routes/user-routes")
const bcrypt=require("bcrypt")

const validUser=async(mailid)=>{
    let valid=false
  await  user.find({mailID:mailid}).then((data)=>{
        if(data.length){
            valid=true
        }
    })
    return valid
}

const gensalt=(password)=>{
    const salt=10;
    return new Promise((resolve,reject)=>{
   bcrypt.genSalt(salt).then((saltvalue)=>{
   bcrypt.hash(password,saltvalue).then((hash)=>{
        resolve(hash)
    })
})
    })
}

module.exports={gensalt,validUser}