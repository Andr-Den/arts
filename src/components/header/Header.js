import React from 'react'
import logo from '../../images/logo_verde.svg'
import burger from '../../images/menu.svg'

const navMenu = [
  {
    name: 'О нас',
    to: '/about-us'
  },
  {
    name: 'Продукты',
    to: '/products'
  },
  {
    name: 'Контакты',
    to: '/contacts'
  },
  {
    name: 'Новости',
    to: '/news'
  }
]

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-box">
        <a href="/arts"><img src={logo} alt="логотип" className="header__logo" /></a>
        <p className="header__name">НПП "АРТС"</p>
        </div>
        <nav className="header__nav">
          {navMenu.map(({name, to}) => (
            <a href={to} className="header__links" key={name}>{name}</a>
          ))}
        </nav>
        <img className="header__burger" src={burger} alt=""/>
      </div>
    </header>
  )
}

export default Header;