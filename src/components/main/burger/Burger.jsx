import React from 'react';
import "./Burger.scss";
import { scrollToSection } from '../../../helper/scroll/scrollToSection';

export const Burger = ({ setOpenBurger }) => {
  const roadToSection = (param) => {
    setOpenBurger(false);
    scrollToSection(param)
  }

  return (
    <div className="burger-menu">
      <div className="burger-menu-btn">
        <button onClick={() => setOpenBurger(false)}>X</button>
      </div>

      <div className="burger-menu-items">
        <span onClick={() => roadToSection("descr")}>Опис</span>
        <span onClick={() => roadToSection("details")}>Характеристики</span>
        <span onClick={() => roadToSection("order")}>Замовити</span>
        <a  
          href="https://t.me/your_contender"
          target="_blank"
        >
          Написати нам
        </a>
      </div>
    </div>
  )
}
