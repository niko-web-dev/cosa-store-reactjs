import './subscription.sass'

import discount from '../../images/discount.jpg'

import Form from '../form'

const Subscription = () => {
  return (
    <section className="subscription">
        <div className="container">
            <div className="subscription__inner">
                <div className="subscription__img">
                    <img src={discount} alt="image"/>
                </div>
                <div className="subscription__content">
                    <div className="subscription__text-title">
                        ПОЛУЧИТЕ СКИДКУ 10% НА ВАШ ПЕРВЫЙ ЗАКАЗ
                    </div>
                    <div className="subscription__text">
                        <span>
                            Для этого необходимо:
                        </span> <br/>
                        ✔︎ Подписаться на нашу рассылку акций и специальных предложений;<br/>
                        ✔︎ Получить по почте промокод;​​<br/>
                        ✔︎ При оформлении заказа укажите высланный промокод<br/>
                        Общая стоимость вашего заказа будет пересчитана с учетом скидки.
                    </div>
                </div>
            </div>
            <Form/>
        </div>
    </section>
  )
}

export default Subscription