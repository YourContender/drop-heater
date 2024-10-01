import React, { useState } from 'react';
import modal from "../../img/modal1.png";
import Confetti from "react-confetti";
import "./Modal.scss";

export const Modal = () => {
  return (
    <div className="modal">
        <Confetti className="confetti"/>

        <div className="modal-container">
          <h1 className="modal-title">
              Дякуємо! Наш менеджер найближчим часом з Вами зв'яжеться!
          </h1>

          <img src={modal} alt="" />
        </div>
    </div>
  )
}
