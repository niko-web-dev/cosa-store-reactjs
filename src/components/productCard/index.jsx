import React from 'react'
import { Link } from "react-router-dom"

import './product.sass'
import {ToCartBtn} from "../index";

const ProductCard = ({ item, filter }) => {

  const [hovering, setHover] = React.useState(false)

  return (
      <Link to={`/product/${item.id}`}
            key={item.id + item.name}
            id={item.id}
            datafilter={item.datafilter}
            className={filter == "all" || filter === item.datafilter
                            ? "product__link"
                            : "product__link hiden"}
      >

        <div className="product">
          <div className='product__img'
            style={{
              backgroundImage: hovering ? `url(${item.hover})` : `url(${item.bg})`
            }}
               onMouseOver={() => setHover(true)}
               onMouseOut={() => setHover(false)}>
          </div>

          <div className="product__name">
            {item.name}
          </div>
          <div className="product__price">
            {item.price} р.
          </div>
            <ToCartBtn/>
        </div>

       </Link>
    )
}

export default ProductCard