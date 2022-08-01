import { Route, Routes } from 'react-router-dom';

import Main from "./pages/Main";
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import Products from './pages/Products';

import MonitoringPerson from './pages/MonitoringPerson';
import OKR from './pages/OKR';
import MonitoringLines from './pages/MonitoringLines';

function App() {
  return (
    <Routes>
      <Route exact path="/arts" element={<Main />} />
      <Route exact path="/about-us" element={<AboutUs />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/contacts" element={<Contacts />} />
      <Route exact path="/monitoring-person" element={<MonitoringPerson />} />
      <Route exact path="/okr" element={<OKR />} />
      <Route exact path="/monitoring-lines" element={<MonitoringLines />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
