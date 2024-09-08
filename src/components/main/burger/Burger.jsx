import React from 'react';
import "./Burger.scss";

export const Burger = ({ setOpenBurger }) => {
  return (
    <div className="burger-menu">
      <div className="burger-menu-btn">
        <button onClick={() => setOpenBurger(false)}>X</button>
      </div>

      <div className="burger-menu-items">
        <span>Опис</span>
        <span>Характеристики</span>
        <span>Замовити</span>
        <span>Написати нам</span>
      </div>
    </div>
  )
}
