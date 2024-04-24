import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Navbar from "./Navbar"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </div>
  )
}

export default App
