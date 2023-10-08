import Header from "../reuse/header"
import { useNavigate } from "react-router-dom"
import ButtonSection from "../reuse/button-section"
import { useState } from "react"
const LocationInfo=()=>{
    const navigate=useNavigate()
    const [location,setLocation]=useState({email:"",area:"",address:"",latitude:"",city:"",pincode:"",landmark:"",longitude:""})
    const handleLocation=()=>{
        for(let Location in location){
            localStorage.setItem(Location,location[Location])
        }
        fetch("http://localhost:3000/property/detail",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(localStorage)
        })
        navigate("/home")
        localStorage.clear()
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
                <label>Email</label>
            </div>
            <div>
                <input type="email" value={location.name} onChange={(e)=>{setLocation({...location,email:e.target.value})}}/>
            </div>
            <div>
                <label>Area</label>
            </div>
            <div>
                <input type="text" value={location.area} onChange={(e)=>{setLocation({...location,area:e.target.value})}}/>
            </div>
            <div>
                <label>Address</label>
            </div>
            <div>
                <input type="text" value={location.address} onChange={(e)=>{setLocation({...location,address:e.target.value})}}/>
            </div>
            <div>
                <label>Latitude</label>
            </div>
            <div>
                <input type="text" value={location.latitude} onChange={(e)=>{setLocation({...location,latitude:e.target.value})}}/>
            </div>
            </div>
            <div className="pt-2">
            <div>
                <label>City</label>
            </div>
            <div>
                <input type="text" value={location.city} onChange={(e)=>{setLocation({...location,city:e.target.value})}}/>
            </div>
            <div>
                <label>Pincode</label>
            </div>
            <div>
                <input type="text" value={location.pincode} onChange={(e)=>{setLocation({...location,pincode:e.target.value})}}/>
            </div>
            <div>
                <label>Landmark</label>
            </div>
            <div>
                <input type="text" value={location.landmark} onChange={(e)=>{setLocation({...location,landmark:e.target.value})}}/>
            </div>
            <div>
                <label>Longitude</label>
            </div>
            <div>
                <input type="text" value={location.longitude} onChange={(e)=>{setLocation({...location,longitude:e.target.value})}}/>
            </div>
            </div>
        </form>
        <button onClick={()=>{navigate("/generalinfo")}} className="prev">Previous</button>
        <button onClick={handleLocation} className="save">Add Property</button>
    </div>
    </div>
    </>
)
}
export default LocationInfo