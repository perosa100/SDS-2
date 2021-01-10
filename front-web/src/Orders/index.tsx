import React, { useEffect } from 'react'
import { useState } from 'react'
import ProductList from './ProductList'
import StepsHeader from './StepsHeader'
import './styles.css'
import { OrderLocationData, Product } from './types'
import { fetchProducts } from './../config/api'
import OrderLocation from './OrderLocation'

const Orders: React.FC = () => {
  const [products, setproducts] = useState<Product[]>([])
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>()

  useEffect(() => {
    fetchProducts()
      .then((response) => setproducts(response.data))
      .catch((error) => console.log(error))
  }, [])
  return (
    <>
      <StepsHeader />
      <ProductList products={products} />
      <OrderLocation
        onChangeLocation={(location) => setOrderLocation(location)}
      />
    </>
  )
}

export default Orders
