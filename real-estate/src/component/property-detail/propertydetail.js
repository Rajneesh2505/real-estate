import Header from "../reuse/header"
import ButtonSection from "../reuse/button-section"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
const PropertyDetail = () => {
    const navigate = useNavigate()
    const [propertydetail, setPropertyDetail] = useState({length:"", breath: "", totalArea: "", noOfBHK: "", attached: "", furnished: "", lift: "", facing: "", areaUnit: "", noOfFloor: "", westernToilet: "", carParking: "", electricity: "" })
    const handleProperty = () => {
        for (let propertyDetail in propertydetail) {
            localStorage.setItem(propertyDetail, propertydetail[propertyDetail])
        }
        navigate("/generalinfo")
    }
    return (
        <>
        <div className="container">
            <Header />
            <ButtonSection />
            <div>
                <form>
                    <div className="property-1">
                    <div>
                        <label>Length</label>
                    </div>
                    <div>
                        <input type="text" value={propertydetail.length} onChange={(e)=>{setPropertyDetail({...propertydetail,length:e.target.value})}} />
                    </div>
                    <div>
                        <label>Breath</label>
                    </div>
                    <div>
                        <input type="text" value={PropertyDetail.breath} onChange={(e) => { setPropertyDetail({ ...propertydetail, breath: e.target.value }) }} />
                    </div>
                    <div>
                        <label>Total Area</label>
                    </div>
                    <div>
                        <input type="text" value={PropertyDetail.totalArea} onChange={(e) => { setPropertyDetail({ ...propertydetail, totalArea: e.target.value }) }} />
                    </div>
                    <div>
                        <label for="bhk">No Of BHK</label>
                    </div>
                    <div>
                        <select for="bhk" value={PropertyDetail.noOfBHK} onChange={(e) => { setPropertyDetail({ ...propertydetail, noOfBHK: e.target.value }) }}>
                            <option value="">Select BHK</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    </div>
                    <div className="property-2">
                    <div>
                        <label for="attached">Attached</label>
                    </div>
                    <div>
                        <select for="attached" value={PropertyDetail.attached} onChange={(e) => { setPropertyDetail({ ...propertydetail, attached: e.target.value }) }}>
                            <option value="">Select Attached</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div>
                        <label for="furnished">Furnished</label>
                    </div>
                    <div>
                        <select for="furnished" value={PropertyDetail.furnished} onChange={(e) => { setPropertyDetail({ ...propertydetail, furnished: e.target.value }) }}>
                            <option value="">Select Furnished</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div>
                        <label for="lift">Lift</label>
                    </div>
                    <div>
                        <select for="lift" value={PropertyDetail.lift} onChange={(e) => { setPropertyDetail({ ...propertydetail, lift: e.target.value }) }}>
                            <option value="">Select Lift</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div>
                        <label for="facing">Facing</label>
                    </div>
                    <div>
                        <select for="facing" value={PropertyDetail.facing} onChange={(e) => { setPropertyDetail({ ...propertydetail, facing: e.target.value }) }}>
                            <option value="">Select Facing</option>
                            <option value="mountain">Mountain</option>
                            <option value="sea">Sea</option>
                        </select>
                    </div>
                    </div>
                    <div className="pt-3">
                    <div>
                        <label for="area-unit">Area Unit</label>
                    </div>
                    <div>
                        <select for="area-unit" value={PropertyDetail.areaUnit} onChange={(e) => { setPropertyDetail({ ...propertydetail, areaUnit: e.target.value }) }}>
                            <option value="">Select Area Unit</option>
                            <option value="hectare">Hectare</option>
                            <option value="acre">Acre</option>
                            <option value="square foot">Square Foot</option>
                            <option value="square yard">Square Yard</option>
                            <option value="square inch">Square Inch</option>
                            <option value="square meter">Square Meter</option>
                        </select>
                    </div>
                    <div>
                        <label for="no floor">No Of Floor</label>
                    </div>
                    <div>
                        <select for="no floor" value={PropertyDetail.noOfFloor} onChange={(e) => { setPropertyDetail({ ...propertydetail, noOfFloor: e.target.value }) }}>
                            <option value="">Select Floor</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div>
                        <label for="western-toilet">Western Toilet</label>
                    </div>
                    <div>
                        <select for="westerntoilet" value={PropertyDetail.westernToilet} onChange={(e) => { setPropertyDetail({ ...propertydetail, westernToilet: e.target.value }) }}>
                            <option value="">Select Western Toilet</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div>
                        <label for="carparking">Car Parking</label>
                    </div>
                    <div>
                        <select for="carparking" value={PropertyDetail.carParking} onChange={(e) => { setPropertyDetail({ ...propertydetail, carParking: e.target.value }) }}>
                            <option value="">Select Car Parking</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div>
                        <label for="electricity">Electricity</label>
                    </div>
                    <div>
                        <select for="electricity" value={PropertyDetail.electricity} onChange={(e) => { setPropertyDetail({ ...propertydetail, electricity: e.target.value }) }}>
                            <option value="">Select Electricity</option>
                            <option value="2 phase">2 Phase</option>
                            <option value="3 phase">3 Phase</option>
                        </select>
                    </div>
                    </div>
                </form>
                <button onClick={() => { navigate("/basicinfo") }} className="prev">Previous</button>
                <button onClick={handleProperty} className="save">Save&Continue</button>
            </div>
            </div>
        </>
    )
}
export default PropertyDetail