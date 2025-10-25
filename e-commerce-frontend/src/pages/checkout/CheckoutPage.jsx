import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { OrderSummary } from './OrderSummary.jsx'
import { PaymentSummary } from './PaymentSummary.jsx'
import './CheckoutPage.css'
import './CheckoutPageHeader.css'

export function CheckoutPage({ cart, loadCart }) {
  let totalQuantity = 0;
  cart.forEach((item) => {
    totalQuantity += item.quantity;
  })
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setpaymentSummary] = useState([]);

  useEffect(() => {
    const fetchCheckoutData = async () => {

      let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
      setDeliveryOptions(response.data);

      response = await axios.get('/api/payment-summary');
      setpaymentSummary(response.data);
    };
    fetchCheckoutData();
  }, [cart])

  return (
    <>

      <title>Checkout</title>

      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<Link className="return-to-home-link"
              to="/">{totalQuantity} items</Link>)
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} />
          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  )
}