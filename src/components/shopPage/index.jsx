import { Categories,  ProductCard, Footer} from "../../components"

import './shopPage.sass'


const ShopPage = ({ items, categories }) => {
    return (
        <>
         <section className="shop">

            <h3 className="shop__title">аксессуары</h3>

                <div className="container">
                    <div className="shop__inner">

                        <Categories categories={categories}/>

                        <div className="shop__items">
                            {
                                items.map((item) => {
                                    return  <ProductCard item={item} key={item.id} />
                                })
                            }
                        </div>
                    </div>
                </div>

            </section>
         <Footer/>
        </>
    )
}
export default ShopPage