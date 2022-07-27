import React from 'react'
import logo from '../../images/logo_verde.svg'
import burger from '../../images/menu.svg'
import DropMenu from '../dropMenu/DropMenu'
import Burger from '../burger/Burger'

function Header() {
  const [openMenu, setOpenMenu] = React.useState(false)

  function handleToggleMenu() {
    setOpenMenu(!openMenu) 
  }

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
              <p href='/products' className="header__links">Продукты</p>
              <DropMenu />
            </div>
            <a href='/contacts' className="header__links">Контакты</a>
            <a href='/news' className="header__links">Новости</a>
        </nav>
        <Burger onClick={handleToggleMenu}/>
        {openMenu ? <ul className="burger__menu">
        <a href="/about-us" className="burger__links">О нас</a>
        <a href="/products" className="burger__links">Продукты</a>
        <a href="/contacts" className="burger__links">Контакты</a>
        <a href="/news" className="burger__links">Новости</a>
      </ul> : ''}
      </div>
    </header>
  )
}

export default Header;