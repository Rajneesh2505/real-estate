import ButtonSection from "../reuse/button-section"
import Header from "../reuse/header"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "../css/component.css"
const BasicInfo = () => {
    const [basicData, setBasicData] = useState({ propertyType: "", price: "", propertyAge: "", description: "", nagotable: "", ownership: "", approved: "", bankLoan: "" })
    const handlesubmit = () => {
        for(let basicdata in basicData){
            localStorage.setItem(basicdata,basicData[basicdata])
           }
        navigate("/propertydetail")
    }
    const navigate = useNavigate()
    return (
        <>
        <div className="container">
            <Header />
            <ButtonSection />
            <div>
                <form>
                    <div className="pt-1">
                    <div>
                        <label for="property">Property Type</label>
                    </div>
                    <div>
                        <select for="property" onChange={(e) => { setBasicData({ ...basicData, propertyType: e.target.value }) }}>
                            <option value="">Select Property Type</option>
                            <option value="plot">Plot</option>
                            <option value="house">House</option>
                            <option value="flat">Flat</option>
                        </select>
                    </div>
                    <div>
                        <label>Price</label>
                    </div>
                    <div>
                        <input type="text" value={basicData.price} onChange={(e) => { setBasicData({ ...basicData, price: e.target.value }) }} />
                    </div>
                    <div>
                        <label for="property age">Property Age</label>
                    </div>
                    <div>
                        <input type="text" value={basicData.propertyAge} onChange={(e) => { setBasicData({ ...basicData, propertyAge: e.target.value }) }} />
                    </div>
                    <div>
                        <label >Property Description</label>
                    </div>
                    <div>
                        <input type="text" value={basicData.description} onChange={(e) => { setBasicData({ ...basicData, description: e.target.value }) }} />
                    </div>
                    </div>
                    <div className="pt-2">
                    <div>
                        <label for="nagotable">Nagotable</label>
                    </div>
                    <div>
                        <select for="nagotable" onChange={(e) => { setBasicData({ ...basicData, nagotable: e.target.value }) }}>
                            <option value="">Select Nagotable</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        <label for="ownership">Ownership</label>
                    </div>
                    <div>
                        <select for="ownership" onChange={(e) => { setBasicData({ ...basicData, ownership: e.target.value }) }}>
                            <option value="">Select Ownership</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        <label for="Approved" >Property Approved</label>
                    </div>
                    <div>
                        <select for="Approved" onChange={(e) => { setBasicData({ ...basicData, approved: e.target.value }) }}>
                            <option value="">Select Approved</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        <label for="bank-loan">Bank Loan</label>
                    </div>
                    <div>
                        <select for="bank-loan" onChange={(e) => { setBasicData({ ...basicData, bankLoan: e.target.value }) }}>
                            <option value="">Select Bank Loan</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    </div>
                </form>
                <button onClick={() => { navigate("/home") }} className="prev"> Cancel</button>
                <button onClick={handlesubmit} className="save">Save&Continue</button>
            </div>
            </div>
        </>
    )
}
export default BasicInfo