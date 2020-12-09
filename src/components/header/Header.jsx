import React from 'react'
import {Link} from "react-router-dom";

import SliderTop from '../slider/SliderTop';
import Nav from '../nav/Nav';

import logo from '../../image/logo.jpg'
import headerLogo from '../../image/header.jpg'

import s from './header.sass'


const Header = () => {
    const [menuView, setMenuView] = React.useState(false)

    function toggleMenuBtn() {
        if (window.innerWidth <= 830) {
            setMenuView(!menuView)
        }
    }


    return (
    <header className={s.header}>
        <SliderTop/>

        <div className="container">
            <div className="header__inner">
              <div className="header__img">
                  <img src={headerLogo} alt="logo" />
              </div>

              <div className="header__logo">
                <Link to={"/"}>
                  <img className="header__logo-img" src={logo} alt="logo" />
                </Link>
              </div>

              <div onClick={() => toggleMenuBtn()}
                  className="header__btn-menu"
                  id="header__btn-menu"
                   style={{
                       display: (window.innerWidth <= 830) ? `block` : `none`,
                   }}
              >
                  <div className={menuView ? "bar1 change" : "bar1"}></div>
                  <div className={menuView ? "bar2 change" : "bar2"}></div>
                  <div className={menuView ? "bar3 change" : "bar3"}></div>
              </div>

              <Nav menuView={menuView}/>

            </div>
        </div>
    </header>
    )
    }

export default Header