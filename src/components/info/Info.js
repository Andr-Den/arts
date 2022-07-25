import React from 'react'

function Info() {
  return (
    <section className="page">
      <h2 className="info__title">Контакты</h2>
      <div className="info__container">
        <div className="info__box">
        <p className="info__phone">+7 (922) 202-24-76</p>
          <div>
            <p className="info__address">620073, г. Екатеринбург, ул. Крестинского, 44</p>
            <p className="info__email">info@example.com</p>
            </div>
        </div>
        <div className="info__map">
        <iframe 
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa1dc0ec38984d1fdccef42db6c7e6ce0895265a5c3c0d744dfc0519fdd61fa42&amp;source=constructor"
          title="Map"
          frameBorder="0"
          className="info__map">
        </iframe>
      </div>
      </div>
    </section>
  );
}

export default Info;
