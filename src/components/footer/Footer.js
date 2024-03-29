import React from 'react';

function Footer({page, container_className, footer_className}) {
  return (
    <footer className={`footer ${footer_className}`}>
      <div className={`footer__container ${container_className}`}>
      <div className={`contact__container ${page}`}>
        <p className="contact__phone">+7 (922) 202-24-76</p>
        <div className="contact__box">
          <p className="contact__address">620073, г. Екатеринбург, ул. Крестинского, 44</p>
          <a className="contact__email" href="mailto:info@example.com" target="_blank" rel="noopener noreferrer">info@example.com</a>
        </div>
      </div>
       <nav className="footer__nav">
          <a href='#/about-us' className="footer__links">О нас</a>
          <ul className="footer__drop-links">
            <a href='#/products' className="footer__links">Продукты</a>
            <a href="#/monitoring-person" className="footer__link">Мониторинг персонала</a>
            <a href="#/monitoring-lines" className="footer__link">Мониторинг и диагностика высоковольтных линий</a>
            <a href="#/active" className="footer__link">Активная молниезащита</a>
            <a href="#/okr" className="footer__link">Заказные ОКP</a>
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