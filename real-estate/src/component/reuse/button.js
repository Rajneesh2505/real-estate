import { useNavigate } from "react-router-dom"
const Button=()=>{
    const navigate=useNavigate()
    return (
        <>
        <button onClick={()=>{navigate(-1)}}>Cancel</button>
            <button onClick={()=>{navigate(+1)}}>Save&Continue</button>
        </>
    )
}
export default Button