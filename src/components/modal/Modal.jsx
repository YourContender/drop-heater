import React from 'react';
import modal from "../../img/modal1.png";
import "./Modal.scss";

export const Modal = () => {
  return (
    <div className="modal">
        <h1 className="modal-title">
            Дякуємо! Наш менеджер з Вами зв'яжеться у найближчий час
        </h1>

        <img src={modal} alt="" />
    </div>
  )
}
