import Button from "./components/Button"
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
function App(){
    return(
       <>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/Learn"></Route>
                <Route path="/Login"></Route>
                <Route path="/Profile"></Route>
                <Route path="/Safety"></Route>
            </Routes>
          </BrowserRouter>
       </>
    )
}
export default App