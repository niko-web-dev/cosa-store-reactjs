import React from "react"

import { Categories,
    ProductCard,
    Footer } from "components"

import './shopPage.sass'


const ShopPage = ({ itemsShopPage, categories }) => {

    const [filter, setFilter] = React.useState(["all"])

    return (
        <>
         <section className="shop">

            <h3 className="shop__title">аксессуары</h3>

                <div className="container">
                    <div className="shop__inner">

                        <Categories
                                    categories={categories}
                                    setFilter={setFilter}
                        />

                        <div className="shop__items">
                            {
                                itemsShopPage.map((item) => {
                                    return  <ProductCard
                                                    item={item}
                                                    key={item.id}
                                                    filter={filter}

                                    />
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