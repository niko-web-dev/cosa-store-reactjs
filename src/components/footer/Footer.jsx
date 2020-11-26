import DeliveryLink from '../links/Delivery'
import Faq from '../links/Faq'
import Warranty from '../links/Warranty'

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
          <div class="footer__bottom">
            <div class="footer__bottom-text">
                Если у вас возник вопрос или появилось<br/>
                предложение, пожалуйста, свяжитесь с нами
            </div>
            <div class="footer__bottom-contact">
                <a href="tel:79197293534">+7 919 729 35 34</a><br/>
                <span>mycosa.acc@gmail.com</span>
            </div>
        
            <div class="footer__bottom-social">
                <a rel="noreferrer" class="footer__bottom-social-in" href="https://www.instagram.com/cosa_accessories/">&nbsp</a>
                <a rel="noreferrer" class="footer__bottom-social-pint" href="https://www.pinterest.ru/cosaaccessories/">&nbsp</a>
            </div> 
            </div>
        </div>
    </footer> 
  )
}

export default Footer