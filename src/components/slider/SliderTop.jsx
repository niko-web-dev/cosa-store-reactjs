import { useState, useEffect, useRef } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import './slider.scss'

const categoryData = ['Бесплатная доставка по Москве от 3000 руб','Бесплатная доставка по России от 5000 руб']

const SliderTop = () => {
  const [index] = useState(0)
  const swiper = useRef(null)

  useEffect(()=>{
      swiper.current = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 3000,
        },
        speed: 2000,
        centeredSlides: true,
        slidesPerView: 'auto',
        })
  }, [])

  useEffect(() => {
      swiper.current.update()
  }, [index])

  return (
    <div className="slider-top">
        <div className="swiper-container">
          <div className="swiper-wrapper header__discount-slick">
            {categoryData.map((el,key) => {
                return(
                  <div className="swiper-slide header__discount" key={key}>
                    {el} 
                  </div>
                )
            })}
          </div>
        </div>
    </div>
  )
}

export default SliderTop