import React from "react"
import { Routes, Route } from "react-router-dom"
import NavigationBar from "./components/NavigationBar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Section1 from "./pages/Section1"
import "./css/NavBar.css"
import "./css/Footer.css"
import "./css/Home.css"
import "./css/Projects.css"


const App = () => {
  return (
    <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="section1" element={<Section1 />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
