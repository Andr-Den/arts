import React from "react";

const products = [
  {
    name: 'Мониторинг персонала',
    to: '/monitoring-person'
  },
  {
    name: 'Заказные ОКP',
    to: '/okr'
  },
  {
    name: 'Мониторинг и диагностика высоковольтных линий',
    to: '/monitoring-lines'
  },
];

function DropMenu() {
  return (
    <div className="menu">
      <ul className="menu__list">
      {products.map(({name, to}) => (
        <li key={name} className="menu__links">
          <a href={to} className="menu__links">{name}</a>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default DropMenu