import React from "react"
import { Routes, Route } from "react-router-dom"
import NavigationBar from "./components/NavigationBar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Section1 from "./pages/Section1"
import Contact from "./pages/Contact"
import Skills from "./pages/Skills"
import Slamajamz from "./pages/Slamajamz"
import "./css/NavBar.css"
import "./css/Footer.css"
import "./css/Home.css"
import "./css/Projects.css"
import "./css/Contact.css"
import "./css/Skills.css"

const App = () => {
  return (
    <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/section1" element={<Section1 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/slamajamz" element={<Slamajamz />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
