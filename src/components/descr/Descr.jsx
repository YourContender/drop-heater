import React from 'react';
import img7 from '../../img/img7.png';
import img13 from '../../img/img13.png';
import img12 from '../../img/img12.png';
import img11 from '../../img/img11.png';
import "./Descr.scss";

export const Descr = () => {
  return (
    <div className="descr" id="descr">
      <div className="descr-title">
        <h1>Опис: </h1>
      </div>

      <div className="descr-container">
        <div className="descr-text">
          <img src={img7} alt="" />
          <div>
            <span>
              Туристичний газовий обігрівач Portable Gas Heater YC-808B – саме те, що потрібно для риболовлі 
              та кемпінгу, туризму та відпочинку на природі. Потужність 1,3 кВт робить його багатофункціональним 
              пристроєм, який можна використовувати для того, щоб закип'ятити воду або приготувати їжу, швидко 
              досягти комфортної температури в приміщенні. Портативний обігрівач з керамічним нагрівальним 
              елементом має поворотний механізм, який дозволяє направляти теплове випромінювання під потрібним 
              кутом і використовувати обігрівач як плиту для приготування, встановивши посуд на таганок, що 
              знімається. 
            </span>
            <span>
              Крім того, це надійне, ефективне та безпечне рішення для обігріву наметів, вуличних 
              наметів, автотрейлерів, павільйонів або невеликих приміщень дачного типу. Обігрівач оснащений 
              клапаном контролю тиску газу, пристроєм налаштування захисного картриджа та зручною ручкою для 
              перенесення. Пристрій має вбудований перехідник для підключення до великих газових балонів LGP і 
              може використовуватися з цанговими газовими балонами об'ємом 200 г. 
            </span>
          </div>
        </div>
      </div>

      <div className="descr-photo">
        <img src={img11} alt="" />
        <img src={img12} alt="" />
        <img src={img13} alt="" />
      </div>
    </div>
  )
}
