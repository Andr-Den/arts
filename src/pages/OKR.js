import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Product from '../components/product/Product';

function OKR() {
  return (
    <div className="page">
      <Header className="header"/>
      <Product title='Заказные ОКP'>
      <ul className="product__list">
        <li>
          <h3 className="product__subtitle">Компетенции</h3>
          <p className="product__description">Наличие опытной команды разработчиков позволяет проводить опытно-конструкторские работы по созданию электронных и радиоэлектронных устройств различного применения, а также программного обеспечения.</p>
        </li>
        <li>
          <h3 className="product__subtitle">Пример ОКР: Пульт ДУ медицинского светильника</h3>
        </li>
      
      </ul>
      </Product>
      <Footer page="contact__container_no-active" container_className="footer__padding"  footer_className="footer__margin"/>
    </div>
  );
}

export default OKR;