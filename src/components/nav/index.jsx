import Icon from "../icon"
import CartIcon from "../cart/CartIcon";
import { Link } from "react-router-dom";

const Nav= ({ menuView }) => {
  return (
    <nav className={menuView ? "header__nav menu_active" : "header__nav"} id="header__nav">
            
      <div className="header__nav-list">
          <Link className="header__nav-link" to={'/'}>Главная</Link>
          <Link className="header__nav-link" to={'shop-gage'}>Магазин</Link>
          <a className="header__nav-link" href="http://cosa-store.ru#about">О нас</a>
          <CartIcon/>
          <div className="header__nav-social">
              <a
                  style={{
                      marginRight: 10
                  }}
                  href="https://www.instagram.com/cosa_accessories/"
                  rel="noreferrer">

                  <Icon icon="instagram" size="25px" color="black"/>
              </a>
              <a
                  href="https://www.pinterest.ru/cosaaccessories/"
                  rel="noreferrer">

                  <Icon icon="pinterest" size="25px" color="black"/>
              </a>
          </div>
      </div>
    </nav>
  )
}

export default Nav