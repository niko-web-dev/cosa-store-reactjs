import React from 'react'
import { Modal } from 'components'

const DeliveryLink = () => {
  const [modalActive, setModalActive] = React.useState(false)
  return (
    <>
      <Modal active={modalActive} setActive={setModalActive} >
      <div>
        <h3 className="popup__title" >Гарантии</h3><br/>
        <p className="popup__text">
            Все наши аксессуары выполнены вручную.<br/>
            Перед продажей мы тщательно проверяем наш продукт на наличие дефектов, скрытых и явных. Но случается, что все же в каких-то изделиях со временем может проявится небольшой дефект.<br/>                    
            На наши заколки мы даём гарантию 30 дней с момента приобретения. Гарантия распространяется на случаи производственного брака и фурнитуру.<br/>                    
            Пожалуйста, соблюдайте правила по уходу за изделиями (смотрите раздел FAQ). В противном случае, мы не сможем починить бесплатно Ваше изделие.<br/>                   
            Нам важно, чтобы вы покупали с удовольствием и были уверены в качестве покупки.<br/><br/>
            <b>Возврат/Обмен</b><br/>
            <b>Постановлением Правительства РФ от 19.01.1998 N 55 утвержден Перечень товаров надлежащего качества, не подлежащих обмену/возврату.</b><br/>
            К числу таких товаров, не подлежащих возврату/обмену, относятся предметы личной гигиены: заколки, резинки, ободки, расчески и т.п.<br/>
            Товары ненадлежащего качества или с выявленным производственным браком обмениваются в соответствии с гарантийными обязательствами.
        </p>
      </div>
      </Modal>
      <button className="footer-nav__link" 
        onClick={() => setModalActive(true)}>
        Гарантии
      </button>
    </>
  )
}

export default DeliveryLink