import React from 'react';

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

function Footer({page, container_className, footer_className}) {
  return (
    <footer className={`footer ${footer_className}`}>
      <div className={`footer__container ${container_className}`}>
      <div className={`contact__container ${page}`}>
        <p className="contact__phone">+7 (922) 202-24-76</p>
        <div className="contact__box">
          <p className="contact__address">620073, г. Екатеринбург, ул. Крестинского, 44</p>
          <p className="contact__email">info@example.com</p>
        </div>
      </div>
       <nav className="header__nav">
        {navMenu.map(({name, to}) => (
          <a href={to} className="footer__links" key={name}>{name}</a>
        ))}
      </nav>
      <p class="footer__copyright">&copy; НПП АРТС, 2022</p>
      </div>
    </footer>
  )
}

export default Footer;