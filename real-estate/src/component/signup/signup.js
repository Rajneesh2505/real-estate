import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "../css/component.css"
const Signup=()=>{
    const navigate=useNavigate()
    const [signupdata,setSignupData]=useState({mailID:"",Password:"",confirmPassword:""})
    const handleMail=(e)=>{
        setSignupData({...signupdata,mailID:e.target.value})
    }
    const handlePassword=(e)=>{
        setSignupData({...signupdata,Password:e.target.value})
    }
    const handleConfirmPassword=(e)=>{
        setSignupData({...signupdata,confirmPassword:e.target.value})
    }
    const handleShift=()=>{
        if(signupdata.mailID || signupdata.Password || signupdata.confirmPassword){
            fetch("http://localhost:3000/signup",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(signupdata)
            }).then(()=>{}).catch((err)=>{
                console.log(err.message)
            })
        }else{
            alert("fill the blank space")
        }
        
    }
    return (
        <>
        <div className="initial-pages">
        <form className="sign-up">
            <div>
                <label>Mail ID :</label>
            </div>
            <div>
                <input type="email" value={signupdata.mailID} onChange={handleMail}/>
            </div>
            <div>
                <label>Password :</label>
            </div>
            <div>
                <input type="password" minLength={6} maxLength={10} value={signupdata.Password} onChange={handlePassword}/>
            </div>
            <div>
                <label>Confirm Password :</label>
            </div>
            <div>
                <input type="password" minLength={6} maxLength={10} value={signupdata.confirmPassword} onChange={handleConfirmPassword}/>
            </div>
        </form>
        <button onClick={handleShift} className="signup-btn">
            Signup
        </button>
        <button onClick={()=>{navigate("/login")}} className="signup-btn">
            Log In
        </button>
        </div>
        </>
    )
}
export default Signup