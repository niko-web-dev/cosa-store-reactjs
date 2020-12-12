import { useParams, useHistory } from "react-router-dom"

import './singleProductPage.sass'

const SingleProductPage = ({ items }) => {

    const { id } = useParams()
    const item = items[id - 1]
    const history = useHistory()


    return (
        <>
            <div className="container">
                <div className="product-page">
                    <div className="product-page__img-wrap">
                        <img className="product-page__imgBig" src={item.bg} alt=""/>

                        <div className="product-page__imgSmall-wrap">
                            <img className="product-page__imgSmall" src={item.hover} alt=""/>

                            <img className="product-page__imgSmall" src={item.bg3} alt=""/>

                            <img className="product-page__imgSmall" src={item.bg4} alt=""/>

                        </div>
                    </div>


                    <div className="product-page__content-wrap">
                        <h2>{item.name}</h2>

                        <p>{item.text}</p>

                        <button onClick={() => history.goBack()}>
                            Назад
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default SingleProductPage