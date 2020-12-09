import React from 'react'
import '../collection/collection.sass'
import  '../../sass/shop.sass';
import {Link} from "react-router-dom";

const Product = ({item}) => {

  const [hovering, setHover] = React.useState(false)

  return (
          <Link to={`/product/${item.id}`} id={item.id}>
            <div className="collection__item shop__item" key={item.id}>
              <div className='collection__item-img'
                style={{
                  backgroundImage: hovering ? `url(${item.hover})` : `url(${item.bg})`
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
              </div>
              <div className="shop__item-name">
                {item.name}
              </div>
              <div className="shop__item-price">
                {item.price} р.
              </div>
            </div>
          </Link>
  )
}

export default Product