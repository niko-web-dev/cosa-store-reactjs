import React from 'react'
import { useParams, useHistory } from "react-router-dom"

import "./product.sass"

const ProductPage = ({items}) => {

    const { id } = useParams()
    const item = items[id - 1]
    console.log(item)
    const history = useHistory();
    return (
        <div className="container">
            <div className="product-page">

                <img src={item.bg} alt=""/>

                <h2>{item.name}</h2>

                <p>{item.text}</p>
                <button onClick={() => history.goBack()}>Назад</button>
            </div>
        </div>
    );
}

export default ProductPage