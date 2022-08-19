import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Product from '../components/product/Product';

function MonitoringLines() {
  return (
    <div className="page">
      <Header className="header"/>
      <Product title='Мониторинг и диагностика высоковольтных линий' 
        description=''
      >
      <ul className="product__list">
        <li>
          <h3 className="product__subtitle">АМДВЛ – аппаратура мониторинга и диагностики высоковольтных линий</h3>
          <p className="product__description">Системы фиксируют возникновение аварий в реальном времени и производят статистический анализ накопленной информации и предаварийных ситуаций.</p>
        </li>
        <li>
          <h3 className="product__subtitle">Характеристики</h3>
        </li>
        <li>
          <h3 className="product__subtitle">Состав</h3>
          <ul className="product__product-list">
            <li className="product__card">
              <h4 className="product__product-name">Аппаратура присоединения</h4>
            </li>
            <li className="product__card">
              <h4 className="product__product-name">ВЧ обход реклоузера</h4>
            </li>
            <li className="product__card">
              <h4  className="product__product-name">Устройство согласования с кабельной вставкой</h4>
            </li>
          </ul>
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

export default MonitoringLines;