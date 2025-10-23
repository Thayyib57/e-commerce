import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { Order } from './pages/Order'
import { Tracking } from './pages/Tracking'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<Order />} />
      <Route path="tracking" element={<Tracking />} />
    </Routes>
  )
}

export default App
