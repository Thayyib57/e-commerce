import { Routes, Route } from 'react-router'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { Order } from './pages/Order'
import { Tracking } from './pages/Tracking'
import './App.css'

function App() {

  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/api/cart-items')
      .then((response) => {
        setCart(response.data);

      })
  });

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<Order />} />
      <Route path="tracking" element={<Tracking />} />
    </Routes>
  )
}

export default App
