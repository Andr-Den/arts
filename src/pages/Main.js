import Activities from '../components/activities/Activities';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Footer from '../components/footer/Footer';


function Main() {
  return (
    <div className="page">
      <Header />
      {/* <Hero /> */}
      <Activities />
      <Footer />
    </div>
  );
}

export default Main;
