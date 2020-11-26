import React from 'react'
import Modal from '../modal/Modal'

const DeliveryLink = () => {
  const [modalActive, setModalActive] = React.useState(false)
  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}>
        <div>
        <h3 className="popup__title" >FAQ (Часто задаваемые вопросы)</h3><br/>
          <p className="popup__text">
              <b>Как мне ухаживать за моими аксессуарами?</b><br/>
              Рекомендуем сухую чистку, при сильном загрязнении – влажная чистка локально в местах сильных загрязнений. Для сохранности храните свои аксессуары в специальной упаковке Cosa, в которой они были Вам доставлены.
              Важный момент – ткани, которые мы используем, имеют достаточно яркий цвет, поэтому избегайте попадания ваших аксессуаров под дождь и других ситуаций, когда при намокании аксессуара цвет может перейти на другую одежду.<br/><br/>
              <b>Цвет такой яркий, он сохранится?</b><br/>
              Следует помнить, что яркое солнце и частые стирки приводят к потере цвета и частично внешнего вида. Мы стараемся сделать все возможное, чтобы наши аксессуары радовали вас как можно дольше.<br/><br/>
              <b>Почему цвет моего аксессуара немного отличается от того, что я видел на экране?</b><br/>
              Мы делаем все возможное, чтобы представить цвет наших аксессуаров как можно более точно. Однако разрешение экрана, контраст и яркость может отличаться и влиять на цветопередачу. При необходимости, обратитесь к нам в direct и мы сделаем различные фото и видео, чтобы цвет был более точным.<br/><br/>
              <b>Я бы хотела определенный аксессуар, но нужного цвета у вас нет. Когда будет обновление коллекции?</b><br/>
              Наши коллекции регулярно обновляются, подписывайтесь на наши аккаунты в социальных сетях и следите за новинками. 
              Как мы уже говорили, мы открыты для Вас, в любом случае пишите нам, и возможно необходимый цвет есть или будет в ближайшее время. Мы сможем сделать предварительную резервацию для вас.
          </p>
          </div>
      </Modal>
      <button className="footer-nav__link"
          onClick={() => setModalActive(true)}>
            FAQ
      </button> 
    </>
  )
}

export default DeliveryLink