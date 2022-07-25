import React from 'react'
import logo from '../../images/logo_verde.svg'
import burger from '../../images/menu.svg'
import DropMenu from '../dropMenu/DropMenu'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-box">
          <a href="/arts"><img src={logo} alt="логотип" className="header__logo" /></a>
          <p className="header__name">НПП "АРТС"</p>
        </div>
        <nav className="header__nav">
            <a href='/about-us' className="header__links">О нас</a>
            <div className="header__drop-link">
              <p href='#' className="header__links">Продукты</p>
              <DropMenu />
            </div>
            <a href='/contacts' className="header__links">Контакты</a>
            <a href='/news' className="header__links">Новости</a>
        </nav>
        <img className="header__burger" src={burger} alt=""/>
      </div>
    </header>
  )
}

export default Header;