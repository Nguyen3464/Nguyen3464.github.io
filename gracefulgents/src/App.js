import React from "react"
import NavigationBarShoeApp from "./components/NavigationBarShoeApp"
import { Routes, Route} from "react-router-dom"
import FooterShoeApp from "./components/FooterShoeApp.js"
import ShoeApp from "./pages/ShoeApp"
import ShoeAppIndex from "./pages/ShoeAppIndex"
import "./css/NavBarShoeApp.css"
import "./css/HomeShoeApp.css"
import "./css/FooterShoeApp.css"

const App = () => {
  return (
    <div>

          <NavigationBarShoeApp />
          <Routes>
            <Route path="shoeapp" element={<ShoeApp />} />
            <Route path="shoeappindex" element={<ShoeAppIndex />} />
          </Routes>
          <FooterShoeApp />
    </div>
  )
}

export default App
