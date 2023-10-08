import { useNavigate } from "react-router-dom"
import { useState } from "react"
const Login=()=>{
    const navigate=useNavigate()
    const [loginData,setLogInData]=useState({mailID:"",Password:""})
    const handleMail=(e)=>{
        setLogInData({...loginData,mailID:e.target.value})
    }
    const handlePassword=(e)=>{
        setLogInData({...loginData,Password:e.target.value})
    }
    const handleCheck=()=>{
        if(!loginData.mailID || !loginData.Password){
            alert("fill the blank spaces")
            navigate("/login")
        }else{
            fetch("http://localhost:3000/login",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(loginData)
            }).then((message)=>{
                if(message.statusText=="OK"){
                  navigate("/home")
                }else{
                    alert("please check mail id or password")
                    navigate("/login")
                }
            }).catch((err)=>{
                console.log(err.message)
            })
            
        }
    }
    return(
        <>
        <div className="initial-pages">
        <form className="sign-up">
            <div>
                <label>Mail ID :</label>
            </div>
            <div>
               <input type="email" value={loginData.mailID} onChange={handleMail}/>
            </div>
            <div>
                <label>Password :</label>
            </div>
            <div>
               <input type="password" minLength={6} maxLength={10} value={loginData.Password} onChange={handlePassword}/>
            </div>
        </form>
        <button onClick={handleCheck} className="signup-btn">Sign in</button>
        </div>
        </>
    )
}
export default Login