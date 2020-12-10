import React from 'react';
import { Link } from "react-router-dom";

import cartImg from '../../images/cart.png'

const CartIcon = () => {
    return (
        <Link to={"/cart"}>
            <img
                src={cartImg}
                alt="Карзина"
                style={{
                    width: 23,
                    height: 23,
                    marginTop: 5,
                }}

            />
            <span
                style={{
                    position: "absolute",
                    top: 4,
                    right: -5,
                    color: "red"
                }}
            >
                0
            </span>
        </Link>
    );
};

export default CartIcon;