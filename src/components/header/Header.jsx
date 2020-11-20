import React from 'react'

import SliderTop from '../slider/SliderTop';
import s from './header.sass'

import logo from '../../image/logo.jpg'
import headerLogo from '../../image/header.jpg'
import Nav from '../nav/Nav';

const Header = () => {
  return (
    <header className={s.header}>
      <SliderTop/>
      
      <div className="container"> 
        <div className="header__inner">
          <div className="header__img">
              <img src={headerLogo} alt="logo" />
          </div>

          <div className="header__logo">
            <a href="index.html">
              <img className="header__logo-img" src={logo} alt="logo" />
            </a>
          </div>

          <div className="header__btn-menu" id="header__btn-menu">
            <span className="icon-menu"></span>
          </div>

          <Nav/>

        </div>
      </div>
    </header>
  )
}

export default Header