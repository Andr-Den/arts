import React from 'react';

import personal from '../../images/Personal.png'
import lines from '../../images/Lines.png'
import okr from '../../images/OKR.png'
import lightning from '../../images/str23.jpeg'

import ChevronRight from '../shared/ChevronRight'

<a href="#/active" className="footer__link">Активная молниезащита</a>

const activities = [
  {
    title: 'Мониторинг персонала',
    to: '#/monitoring-person',
    src: personal
  },
  {
    title: 'Мониторинг и диагностика высоковольтных линий',
    to: '#/monitoring-lines',
    src: lines,
  },
  {
    title: 'Активная молниезащита',
    to: '#/active',
    src: lightning,
  },
  {
    title: 'Заказные ОКP',
    to: '#/okr',
    src: okr,
  },
]

function Activities() {
  return (
    <section className="activities">
      <h2 className="activities__heading">Направления деятельности</h2>
      <div className="activities__container">
      {activities.map(({title, src, to}) => (
        <a className="activities__block" key={title} href={to}>
          <img src={src} alt="" className="activities__image"/>
          <div className="activities__text">
            <h2 className="activities__title">{title}</h2>
            <a href={to} className="activities__link"><ChevronRight className="chevron-right"/></a>
          </div>
        </a>
        ))}
        </div>
    </section> 
  )
}

export default Activities;
