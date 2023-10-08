import Header from "../reuse/header"
import { useNavigate } from "react-router-dom"
import ButtonSection from "../reuse/button-section"
import { useState } from "react"
const GeneralInfo=()=>{
    const navigate=useNavigate()
    const [general,setGeneral]=useState({name:"",mobileNo:"",postedBy:"",saleType:"",featuredPackage:"",PPDpackage:""})
    const handleGeneral=()=>{
        for(let General in general){
            localStorage.setItem(General,general[General])
        }
        navigate("/locationinfo")
    }
return (
    <>
    <div className="container">
    <Header/>
    <ButtonSection/>
    <div>
        <form>
            <div className="pt-1">
            <div>
                <label>Name</label>
            </div>
            <div>
                <input type="text" value={general.name} onChange={(e)=>{setGeneral({...general,name:e.target.value})}}/>
            </div>
            <div>
                <label>Mobile</label>
            </div>
            <div>
                <input type="text" value={general.mobileNo} onChange={(e)=>{setGeneral({...general,mobileNo:e.target.value})}}/>
            </div>
            <div>
                <label>Posted By</label>
            </div>
            
            <div>
                <input type="text" value={general.postedBy} onChange={(e)=>{setGeneral({...general,postedBy:e.target.value})}}/>
            </div>
            </div>
            <div className="general">
            <div>
                <label>Sale Type</label>
            </div>
            <div>
                <input type="text" value={general.saleType} onChange={(e)=>{setGeneral({...general,saleType:e.target.value})}}/>
            </div>
            <div>
                <label>Featured Package</label>
            </div>
            <div>
                <input type="text" value={general.featuredPackage} onChange={(e)=>{setGeneral({...general,featuredPackage:e.target.value})}}/>
            </div>
            <div>
                <label>PPD Package</label>
            </div>
            <div>
                <input type="text" value={general.PPDpackage} onChange={(e)=>{setGeneral({...general,PPDpackage:e.target.value})}}/>
            </div>
            </div>
        </form>
       <button onClick={()=>{navigate("/propertydetail")}} className="prev">Previous</button>
       <button onClick={handleGeneral} className="save">Save&Continue</button>
    </div>
    </div>
    </>
)
}
export default GeneralInfo