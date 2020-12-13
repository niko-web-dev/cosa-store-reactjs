import StoreContext from "../../storeContext"


const Cart = () => {
    return (
        <StoreContext.Consumer>
            {
                (dataDb) => {
                    return (
                        <div className="cart">
                            <h2 style={{ paddingTop: 200 }}>
                                CART
                            </h2>
                            <div>
                                {dataDb.cart}
                            </div>
                        </div>
                    )
                }

            }
        </StoreContext.Consumer>
    )
}

export default Cart