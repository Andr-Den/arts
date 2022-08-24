import React from 'react'
import logo from '../../images/logo_verde.svg'
import DropMenu from '../dropMenu/DropMenu'
import Burger from '../burger/Burger'

function Header({className}) {
  const [openMenu, setOpenMenu] = React.useState(false)

  function handleToggleMenu() {
    setOpenMenu(!openMenu) 
  }

  return (
    <header className={className}>
      <div className="header__container">
        <div className="header__logo-box">
          <a href="#/arts"><img src={logo} alt="логотип" className="header__logo rotation" /></a>
          <p className="header__name">НПП "АРТС"</p>
        </div>
        <nav className="header__nav">
            <a href='#/about-us' className="header__links">О нас</a>
            <div className="header__drop-link">
              <a href='#/products' className="header__links">Продукты</a>
              <DropMenu />
            </div>
            <a href='#/contacts' className="header__links">Контакты</a>
            <a href='#/news' className="header__links">Новости</a>
        </nav>
        <Burger onClick={handleToggleMenu}/>
      </div>
      {openMenu ? <ul className="burger__menu">
        <a href="#/about-us" className="burger__links">О нас</a>
        <a href="#/products" className="burger__links">Продукты</a>
        <a href="#/contacts" className="burger__links">Контакты</a>
        <a href="#/news" className="burger__links">Новости</a>
      </ul> : ''}
    </header>
  )
}

export default Header;