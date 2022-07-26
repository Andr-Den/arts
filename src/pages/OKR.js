import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Product from '../components/product/Product';

import okr from '../images/OKR.png'

function OKR() {
  return (
    <div className="page">
      <Header />
      <Product  src={okr} title='Заказные ОКP'  description='Наличие опытной команды разработчиков позволяет проводить опытно-конструкторские работы по созданию электронных и радиоэлектронных устройств различного применения, а также программного обеспечения.'/>
      <Footer page="contact__container_no-active" container_className="footer__padding"  footer_className="footer__margin"/>
    </div>
  );
}

export default OKR;