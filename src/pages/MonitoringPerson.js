import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Product from '../components/product/Product';

import personal from '../images/Personal.png'

function MonitoringPerson() {
  return (
    <div className="page">
      <Header />
      <Product src={personal} title='Мониторинг персонала' description='Линейка устройств для контроля за передвижением персонала и транспорта на строительных площадках промышленных объектов и при их последующей эксплуатации предназначена для решения задач оптимизации затрат, рабочего времени и повышения безопасности проводимых работ.'/>
      <Footer page="contact__container_no-active" className="footer__padding"/>
    </div>
  );
}

export default MonitoringPerson;