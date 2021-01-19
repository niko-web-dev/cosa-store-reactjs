import StoreContext from "../../storeContext"


const Cart = () => {
    return (
        <StoreContext.Consumer>
            {
                (dataDb) => {
                    return (
                        <div className="cart">
                            <h2 style={{ paddingTop: 200, textAlign: 'center' }}>
                                Корзина
                            </h2>
                            <div>
                                {/* {dataDb.cart} */}
                            </div>
                        </div>
                    )
                }

            }
        </StoreContext.Consumer>
    )
}

export default Cart