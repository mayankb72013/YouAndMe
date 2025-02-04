import Button from "./components/Button"
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contacts from "./pages/Contacts"
import Features from "./pages/Features"
import Reviews from './pages/Reviews'
import Stories from './pages/Stories'
import Card from "./components/card"
import Logo from "./icons/logo"
function App(){
    return(
       <>
          {/* <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/Contacts" element={<Contacts></Contacts>}></Route>
                <Route path="/Features" element={<Features></Features>}></Route>
                <Route path="/Reviews" element={<Reviews></Reviews>}></Route>
                <Route path="/Stories" element={<Stories></Stories>}></Route>
            </Routes>
          </BrowserRouter> */}
          <Card type="testimonial" rating="2" review="Withing one month of chating i found my true love" name="Vaidant Sharma" place="Vit vellore"></Card>
          <Card photo={<Logo></Logo>} type="about" heading="This is heading" description="This is the description"></Card>
       </>
    )
}
export default App