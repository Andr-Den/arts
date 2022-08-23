import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    name: 'Мониторинг персонала',
    to: '/monitoring-person'
  },
  {
    name: 'Мониторинг и диагностика высоковольтных линий',
    to: '/monitoring-lines'
  },
  {
    name: "Активная молниезащита",
    to: '/active'
  },
  {
    name: 'Заказные ОКP',
    to: '/okr'
  },
];

function DropMenu() {
  return (
    <div className="menu">
      <ul className="menu__list">
      {products.map(({name, to}) => (
        <li key={name} className="menu__links">
          <Link to={to} className="menu__links">{name}</Link>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default DropMenu