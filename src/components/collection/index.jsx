import { ProductCard } from '../../components'


import './collection.sass'
import {Link} from "react-router-dom";



const Collection = ({ items }) => {

    return (
        <section className="collection">
          <div className="container">
            <h2 className="collection__title">
              Коллекция
            </h2>
            <Link
                to={"/shop-page"}
                className="collection__btn defult__btn">
                    все товары
            </Link>
            <div className="collection__items">
              {
                items.map((item) => {
                  return  <ProductCard item={item} key={item.id} />
                })
              }
            </div>
          </div>
        </section>
    )

}
export default Collection