import Navbar from "./Components/Navbar"
import Home from './pages/Home' 
import Services from "./pages/Services"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer'

const App = () => {

  return (
    <div className="px-4 font-manrope md:px-8 lg:px-16 text-[#26292F] ">
     <Router>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  )
}

export default App
