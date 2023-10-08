import Signup from "./component/signup/signup"
import Login from "./component/login/login"
import AddProperty from "./component/add-property/addproperty"
import BasicInfo from "./component/basic-Info/basicInfo"
import PropertyDetail from "./component/property-detail/propertydetail"
import GeneralInfo from "./component/gerenarl-info/generalinfo"
import LocationInfo from "./component/location-info/locationinfo"
import PageNotFound from "./component/PageNotFound/PageNotFound"
import { BrowserRouter,Route,Routes } from "react-router-dom"
const App=()=>{
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Signup></Signup>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/home" element={<AddProperty></AddProperty>}></Route>
      <Route path="/basicinfo" element={<BasicInfo></BasicInfo>}></Route>
      <Route path="/propertydetail" element={<PropertyDetail></PropertyDetail>}></Route>
      <Route path="/generalinfo" element={<GeneralInfo></GeneralInfo>}></Route>
      <Route path="/locationinfo" element={<LocationInfo></LocationInfo>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App