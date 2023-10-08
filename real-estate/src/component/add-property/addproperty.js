import Header from "../reuse/header"
import { useNavigate } from "react-router-dom"
import "../css/component.css"
import { useEffect , useState} from "react"
const AddProperty=()=>{
    const navigate=useNavigate()
    const [propertyData,setPropertyData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/property/detail").then((data)=>{
          return  data.json()
        }).then((data)=>{
            setPropertyData(...data)
            
         })
    },[])
    let PPD="";
    let Days=""
    function PPDgen(){
        let num="1234567890";
        let ID="PPD"
        for(let i=0;i<4;i++){
            ID+=num[Math.floor(Math.random()*10)]
        }
        for(let j=0;j<2;j++){
            Days+=num[Math.floor(Math.random()*10)]
        }
        PPD=ID
    }
    PPDgen()
    return (
        <>
        <div className="container">
            <Header/>
            <button onClick={()=>{navigate("/basicinfo")}} className="add-property">+ Add Property</button>
            <div className="table">
            <table>
            <thead>
                <tr>
                    <th>PPD ID</th>
                    <th>Image</th>
                    <th>Property</th>
                    <th>Contact</th>
                    <th>Area</th>
                    <th>Views</th>
                    <th>Status</th>
                    <th>Days Left</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{PPD}</td>
                    <td><img/></td>
                    <td>{propertyData.propertyType}</td>
                    <td>{propertyData.mobileNo}</td>
                    <td>{propertyData.area}</td>
                    <td>{Math.floor(Math.random()*10)}</td>
                    <td>{propertyData.saleType}</td>
                    <td>{Days}</td>
                </tr>
            </tbody>
        </table>
            </div>
        </div>
        </>
    )
}

export default AddProperty