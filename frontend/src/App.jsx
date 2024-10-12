import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Shop from "./Pages/shop"
import Footer from "./Components/Footer/Footer"

// import Active_projects_Banner from "./Components/Assets/Freelance-images/active-banner.avif"
// import Completed_Projects_Banner from "./Components/Assets/Freelance-images/completed.jpg"
import dinner_banner from "./Components/Assets/dinner_banner.avif"
import lunch_banner from "./Components/Assets/lunch_banner1.jpg"
import breakfast_banner from "./Components/Assets/breakfast_banner1.avif"


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} > </Route>
          <Route path="/dinner" element={<ShopCategory banner={dinner_banner} category="dinner" />} > </Route>
          <Route path="/lunch" element={<ShopCategory banner={lunch_banner} category="lunch" />} > </Route>
          <Route path="/breakfast" element={<ShopCategory banner={breakfast_banner} category="breakfast" />} > </Route>
          <Route path="/product" element={<Product />} >
            <Route path=":productId" element={<Product />} ></Route>
          </Route>

          <Route path="/cart" element={<Cart />} ></Route>
          <Route path="/login" element={<LoginSignup />} ></Route>

        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
