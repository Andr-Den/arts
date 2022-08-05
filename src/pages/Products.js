import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Activities from '../components/activities/Activities'

function Products() {
  return (
    <div className="page">
      <Header className="header"/>
      <Activities />
      <Footer page="contact__container_no-active" container_className="footer__padding"  footer_className="footer__margin"/>
    </div>
  );
}

export default Products;