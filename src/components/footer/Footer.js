import React from 'react';

const products = [
  {
    name: 'Мониторинг персонала',
    to: '/monitoring-person'
  },
  {
    name: 'Заказные ОКP',
    to: '/okr'
  },
  {
    name: 'Мониторинг и диагностика высоковольтных линий',
    to: '/monitoring-lines'
  },
];

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
       <nav className="footer__nav">
          <a href='#/about-us' className="footer__links">О нас</a>
          <ul className="footer__drop-links">
            <a href='#/products' className="footer__links">Продукты</a>
            <a href="#/monitoring-person" className="footer__link">Мониторинг персонала</a>
            <a href="#/okr" className="footer__link">Заказные ОКP</a>
            <a href="#/monitoring-lines" className="footer__link">Мониторинг и диагностика высоковольтных линий</a>
          </ul>
            <a href='#/contacts' className="footer__links">Контакты</a>
            <a href='#/news' className="footer__links">Новости</a>
      </nav>
      <p class="footer__copyright">&copy; НПП АРТС, 2022</p>
      </div>
    </footer>
  )
}

export default Footer;