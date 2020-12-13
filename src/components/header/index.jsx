import React from 'react'
import { Link } from "react-router-dom"

import { Nav } from 'components'

import logo from 'assets/images/logo.png'
import logo2 from 'assets/images/logo2.png'

import './header.sass'


const Header = () => {
    const [menuView, setMenuView] = React.useState(false)

    function toggleMenuBtn() {
        if (window.innerWidth <= 830) {
            setMenuView(!menuView)
        }
    }


    return (
        <header className="header">

            <div className="container">
                <div className="header__inner">
                  <div className="header__img">
                      <img src={logo2} alt="logo" />
                  </div>

                  <div className="header__logo">
                    <Link to={"/"}>
                      <img className="header__logo-img" src={logo} alt="logo" />
                    </Link>
                  </div>

                  <div onClick={() => toggleMenuBtn()}
                      className="header__btn-menu"
                      id="header__btn-menu">
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