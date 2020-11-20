import React from 'react'

const Nav = () => {
  return (
    <nav className="header__nav" id="header__nav">
            
      <div className="header__nav-list">
          <a className="header__nav-link" href="index.html">Главная</a>
          <a className="header__nav-link" href="shop-page.html">Магазин</a>
          <a className="header__nav-link" href="http://cosa-store.ru#about">О нас</a>
          <div className="header__nav-social" id="header__nav-social">
              <a rel="noreferrer" className="footer__bottom-social-in" href="https://www.instagram.com/cosa_accessories">&nbsp</a>
              <a rel="noreferrer" className="footer__bottom-social-pint" href="https://www.pinterest.ru/cosaaccessories">&nbsp</a>
          </div>
      </div>
    </nav>
  )
}

export default Nav