import { Link } from "react-router-dom"

import './offer.sass'


const Offer = () => {
  return (
      <>
        <div style={{height:145}}></div>
        <section className="offer">
          <div className="container">
              <div className="offer__inner">
                  <div className="offer__content">
                      <h1>С особой любовью</h1>
                      <p>
                          к аксессуарам для волос
                      </p>
                      <Link
                          to={"/shop-page"}
                          className="offer__btn defult__btn">
                            Shop
                      </Link>
                  </div>
              </div>
          </div>
        </section>
      </>
  )
}

export default Offer