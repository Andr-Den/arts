import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Product from '../components/product/Product';

function MonitoringPerson() {
  return (
    <div className="page">
      <Header className="header"/>
      <Product title="Мониторинг персонала">
      <ul className="product__list">
        <li>
          <h3 className="product__subtitle">Назначение</h3>
          <p className="product__description">Линейка устройств для контроля за передвижением персонала и транспорта на строительных площадках промышленных объектов и при их последующей эксплуатации предназначена для решения задач оптимизации затрат, рабочего времени и повышения безопасности проводимых работ.</p>
        </li>
        <li id="compound">
          <h3 className="product__subtitle">Состав</h3>
          <ul className="product__product-list">
            <li className="product__card">
              <h4 className="product__product-name">Базовые станции</h4>
            </li>
            <li className="product__card">
              <h4 className="product__product-name">Абонентские устройства</h4>
            </li>
          </ul>
        </li>
        <li>
          <h3  className="product__subtitle">Характеристики</h3>
        </li>
        <li>
          <h3  className="product__subtitle">Примеры применения</h3>
        </li>
      </ul>
      </Product>
      <Footer page="contact__container_no-active" container_className="footer__padding"  footer_className="footer__margin"/>
    </div>
  );
}

export default MonitoringPerson;