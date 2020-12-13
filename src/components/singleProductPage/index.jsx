import React, { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"

import { Footer, Modal, ToCartBtn } from "components"

import Swiper from 'swiper'

import 'swiper/css/swiper.min.css'
import './singleProductPage.sass'


const SingleProductPage = ({ itemsShopPage }) => {

    const [modalActive, setModalActive] = React.useState(false)
    const { id } = useParams()
    const item = itemsShopPage[id - 1]
    const [index] = useState(1)
    const swiper = useRef(null)


    useEffect(()=>{
        swiper.current = new Swiper('.swiper-product', {
            loop: true,
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }, [])

    useEffect(() => {
        swiper.current.update()
    }, [index])
    return (
            <div className="container">
                <div className="product-page">

                    <Modal active={modalActive} setActive={setModalActive}>

                        <div className="swiper-product">
                            <div className="swiper-wrapper header__discount-slick">
                                <img className="swiper-slide swiper-slide-prod product-page__imgBig" src={item.bg} alt=""/>
                                <img className="swiper-slide swiper-slide-prod product-page__imgSmall" src={item.hover} alt=""/>
                                <img className="swiper-slide swiper-slide-prod product-page__imgSmall" src={item.bg3} alt=""/>
                                <img className="swiper-slide swiper-slide-prod product-page__imgSmall" src={item.bg4} alt=""/>
                            </div>
                        </div>

                    </Modal>

                    <div className="product-page__img-wrap"
                         onClick={() => setModalActive(true)}>

                            <img className="product-page__imgBig" src={item.bg} alt=""/>

                            <div className="product-page__imgSmall-wrap">
                                <img className="product-page__imgSmall" src={item.hover} alt=""/>

                                <img className="product-page__imgSmall" src={item.bg3} alt=""/>

                                <img className="product-page__imgSmall" src={item.bg4} alt=""/>

                            </div>

                        </div>

                    <div className="product-page__content-wrap">
                        <div className="product-page__text">
                            <h2>{item.name}</h2>
                            <span>{item.price}р.</span>
                            <p>{item.text}</p>
                        </div>

                        <ToCartBtn/>
                    </div>

                </div>
                <Footer/>
            </div>
        )
    }

export default SingleProductPage