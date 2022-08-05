import React from 'react';

import personal from '../../images/Personal.png'
import lines from '../../images/Lines.png'
import okr from '../../images/OKR.png'

import ChevronRight from '../shared/ChevronRight'

const activities = [
  {
    title: 'Мониторинг персонала',
    to: '#/monitoring-person',
    src: personal
  },
  {
    title: 'Заказные ОКP',
    to: '#/okr',
    src: okr,
  },
  {
    title: 'Мониторинг и диагностика высоковольтных линий',
    to: '#/monitoring-lines',
    src: lines,
  },
]

function Activities() {
  return (
    <section className="activities">
      <h2 className="activities__heading">Направления деятельности</h2>
      <div className="activities__container">
      {activities.map(({title, src, to}) => (
        <div className="activities__block" key={title}>
          <img src={src} alt="" className="activities__image"/>
          <div className="activities__text">
            <h2 className="activities__title">{title}</h2>
            <a href={to} className="activities__link"><ChevronRight className="chevron-right"/></a>
          </div>
        </div>
        ))}
        </div>
    </section> 
  )
}

export default Activities;