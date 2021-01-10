import React from 'react'
import './styles.css'
import { ReactComponent as Pizza } from './Pizza.svg'
import { Product } from './types'

type Props = {
  product: Product
}

function formaterPrice(price: number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2
  })
  return formatter.format(price)
}

const ProductCard: React.FC<Props> = ({ product }: Props) => {
  return (
    <div className="order-card-container">
      <h3 className="order-card-title">{product.name}</h3>
      <img
        src={product.imageUri}
        className="order-card-image"
        alt={product.name}
      ></img>
      <h3 className="order-card-price">{formaterPrice(product.price)}</h3>
      <div className="order-card-description">
        <h3>Descrição</h3>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductCard
