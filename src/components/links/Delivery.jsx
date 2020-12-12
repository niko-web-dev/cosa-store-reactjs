import React from 'react'
import { Modal } from '../../components'

const DeliveryLink = () => {
  const [modalActive, setModalActive] = React.useState(false)
  return (
    <>
      <Modal active={modalActive} setActive={setModalActive} >
        <div>
          <h3 className="popup__title">Доставка и оплата</h3><br/> 
          <p className="popup__text">
              <b>По Москве</b> <br/>
              Самовывоз - бесплатно.<br/>
              От станции метро — Войковская/Балтийская/Водный стадион<br/>
              По адресу: Головинское шоссе д.8 к.1<br/>
              Доставка курьером по Москве в пределах МКАД - 300 р.<br/>
              Бесплатная доставка по Москве (в пределах МКАД) при заказе от 3000 р.<br/>
              Бесплатная доставка по России и странам СНГ при заказе от 5000 р.<br/>
              <br/>
              <b>По России</b><br/>
              Почта - 350 р.<br/>
              <b>По миру</b><br/>
              Почта России - 1000 р.<br/>
              Весь заказанный товар мы укладываем в фирменную упаковку<br/>
              <br/>
              <b>Оплата</b><br/>
              Мы работаем по принципу 100% предоплаты с помощью перевода денег на карту Сбербанка, счет PayPal или оплатой наличными при получении товара.<br/>
              Более полную информацию об оплате вы получите в письме обратной связи, которое получите оформив  заказ.
          </p>
        </div>
      </Modal>
      <button className="footer-nav__link" 
        onClick={() => setModalActive(true)}>
        Доставка и оплата
      </button>
    </>
  )
}

export default DeliveryLink