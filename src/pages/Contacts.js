import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Info from '../components/info/Info';


function Contacts() {
  return (
    <div className="page">
      <Header />
      <Info />
      <Footer page="contact__container_no-active" className="footer__padding"/>
    </div>
  );
}

export default Contacts;
