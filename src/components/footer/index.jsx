import { DeliveryLink, Faq, Warranty } from '../../components'

import Icon from "../icon"
import './footer.sass'

const Footer = () => {
  return (

    <footer className="footer">
        <div className="container">
          <div className="footer-nav">
            <DeliveryLink/>
            <Faq/>
            <Warranty/>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom-text">
                Если у вас возник вопрос или появилось<br/>
                предложение, пожалуйста, свяжитесь с нами
            </div>
            <div className="footer__bottom-contact">
                <a href="tel:79197293534">+7 919 729 35 34</a><br/>
                <span>mycosa.acc@gmail.com</span>
                <div className="footer__bottom-social">
                    <a
                        href="https://www.instagram.com/cosa_accessories/"
                        rel="noreferrer"
                        style={{
                            marginRight: 10
                        }}>

                        <Icon icon="instagram" size="30px"/>
                    </a>
                    <a
                        href="https://www.pinterest.ru/cosaaccessories/"
                        rel="noreferrer">

                        <Icon icon="pinterest" size="35px"/>
                    </a>
                </div>
            </div>
            </div>
        

        </div>
    </footer> 
  )
}

export default Footer