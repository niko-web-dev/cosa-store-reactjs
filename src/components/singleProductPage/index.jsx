import { useParams, useHistory } from "react-router-dom"

import "../productCard/product.sass"

const SingleProductPage = ({ items }) => {

    const { id } = useParams()
    const item = items[id - 1]
    const history = useHistory()

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

export default SingleProductPage