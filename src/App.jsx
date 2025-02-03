import Button from "./components/Button"
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contacts from "./pages/Contacts"
import Features from "./pages/Features"
import Reviews from './pages/Reviews'
import Stories from './pages/Stories'
import Card from "./components/card"
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
          <Card></Card>
       </>
    )
}
export default App