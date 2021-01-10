import React from 'react'
import ProductCard from './ProductList copy'
import './styles.css'
import { Product } from './types'

type Props = {
  products: Product[]
}

const ProductList: React.FC<Props> = ({ products }: Props) => {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
