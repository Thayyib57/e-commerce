import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header } from '../../components/Header.jsx'
import { ProductsGrid } from './ProductsGrid.jsx'
import './HomePage.css'

export function HomePage( { cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then((response) => {
        setProducts(response.data);
      })
  }, []);

  return (
    <>
      <title>E-commerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  )
}