import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Product from '../components/product/Product';

function Active() {
  return (
    <div className="page">
      <Header className="header"/>
      <Product title='Активная молниезащита'>
      <ul className="product__list">
        <li>
          <h3 className="product__subtitle">Активный молниеприемник</h3>
        </li>
        <li>
          <h3 className="product__subtitle">Счетчик ударов молний</h3>
        </li>
      
      </ul>
      </Product>
      <Footer page="contact__container_no-active" container_className="footer__padding"  footer_className="footer__margin"/>
    </div>
  );
}

export default Active;