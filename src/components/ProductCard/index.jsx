import React from 'react'
import { Link } from "react-router-dom"

import './product.sass'

const ProductCard = ({ item }) => {

  const [hovering, setHover] = React.useState(false)

  return (
      <Link to={`/product/${item.id}`} id={item.id}>
        <div className="product" key={item.id}>
          <div className='collection__item-img product__img'
            style={{
              backgroundImage: hovering ? `url(${item.hover})` : `url(${item.bg})`
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
          </div>
          <div className="product__name">
            {item.name}
          </div>
          <div className="product__price">
            {item.price} р.
          </div>
        </div>
      </Link>
    )
}

export default ProductCard