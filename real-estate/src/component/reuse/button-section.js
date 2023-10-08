import { useNavigate } from "react-router-dom"
const ButtonSection=()=>{
    const navigate=useNavigate()
    return(
        <>
        Add New Property
        <div >
        <button onClick={()=>{navigate("/basicinfo")}} className="btn-section"> Basic Info</button>
        <button onClick={()=>{navigate("/propertydetail")}} className="btn-section">Property Detail</button>
        <button onClick={()=>{navigate("/generalinfo")}} className="btn-section">  General Info</button>
        <button onClick={()=>{navigate("/locationinfo")}} className="btn-section">  Location Info</button>
        </div>
        </>
    )
}
export default ButtonSection