import React, { useEffect } from 'react'
import { useState } from 'react'
import ProductList from './ProductList'
import StepsHeader from './StepsHeader'
import './styles.css'
import { OrderLocationData, Product } from './types'
import { fetchProducts, saveOrder } from './../config/api'
import OrderLocation from './OrderLocation'
import OrderSummary from './OrderSummary'
import Footer from '../Footer'
import { checkIsSelected } from './helpers'
import { toast } from 'react-toastify'

const Orders: React.FC = () => {
  const [products, setproducts] = useState<Product[]>([])
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>()

  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price
  }, 0)

  useEffect(() => {
    fetchProducts()
      .then((response) => setproducts(response.data))
      .catch((error) => toast.warning('Erro ao listar produtos'))
  }, [])

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product)

    if (isAlreadySelected) {
      const selected = selectedProducts.filter((item) => item.id !== product.id)
      setSelectedProducts(selected)
    } else {
      setSelectedProducts((previous) => [...previous, product])
    }
  }

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }))
    const payload = {
      ...orderLocation!,
      products: productsIds
    }

    saveOrder(payload)
      .then((response) => {
        toast.error(`Pedido enviado com sucesso! N°${response.data.id}`)
        setSelectedProducts([])
      })
      .catch(() => {
        toast.warning('Erro ao enviar pedido')
      })
  }
  return (
    <>
      <div className="orders-container">
        <StepsHeader />
        <ProductList
          products={products}
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrderLocation
          onChangeLocation={(location) => setOrderLocation(location)}
        />
        <OrderSummary
          amount={selectedProducts.length}
          totalPrice={totalPrice}
          onSubmit={handleSubmit}
        />
        <Footer />
      </div>
    </>
  )
}

export default Orders
