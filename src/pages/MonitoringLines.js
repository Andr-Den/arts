import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Product from '../components/product/Product';

import lines from '../images/Lines.png'

function MonitoringLines() {
  return (
    <div className="page">
      <Header className="header"/>
      <Product 
        src={lines} title='Мониторинг и диагностика высоковольтных линий' 
        description='Системы фиксируют возникновение аварий в реальном времени и производят статистический анализ накопленной информации и предаварийных ситуаций.'
      />
      <Footer page="contact__container_no-active" container_className="footer__padding"  footer_className="footer__margin"/>
    </div>
  );
}

export default MonitoringLines;