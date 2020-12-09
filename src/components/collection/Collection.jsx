import React from 'react'
import Product from '../product/Product'

import './collection.sass'



const Collection = ({items}) => {

    return (
        <section className="collection">
          <div className="container">
            <h2 className="collection__title">
              Коллекция
            </h2>
            <button className="collection_btn defult__btn">
              <a href="shop-page.html">все товары</a>
            </button>
            <div className="collection__items shop__items">
              {
                items.map((item) => {
                  return  <Product item={item} key={item.id} />
                })
              }
            </div>
          </div>
        </section>
    )

}
export default Collection