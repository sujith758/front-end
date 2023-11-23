import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import Cart from './Pages/Cart'
import Hero from './Components/Hero/Hero'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory category="men"/>}/>
          <Route path='/women' element={<ShopCategory category="women"/>}/>
          <Route path='/kids' element={<ShopCategory category="kids"/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path=":productId" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
