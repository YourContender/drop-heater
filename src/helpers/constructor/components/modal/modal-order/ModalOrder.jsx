import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import "./modalOrder.scss";

export const ModalOrder = ({ setSuccessOrder }) => {
    const [countdown, setCountdown] = useState(5);
    return (
        <>
            <div className="modal-backdrop">
            </div>
                
            <div className="modal">
                <button className="modal-order-close">                             
                    <FontAwesomeIcon 
                        icon={faXmark} 
                        onClick={() => setSuccessOrder(false)}/>
                </button>

                <div className="modal-content">
                    <div className="modal-icon">
                    ✔️
                    </div>
                    <h2 className="modal-title">Дякуємо за замовлення!</h2>
                    <p className="modal-message">Наш менеджер зв'яжеться з Вами найближчим часом!</p>
                </div>

                <div className="modal-promo">
                    <p className="modal-promo-message">
                        Для Вас є чудова пропозиція, даруємо Вам промокод <span>-10% </span>
                        на додадкову одиницю замовленого Вами товару. Просто назвіть його менеджеру і додадкова знижка буде активована.
                    </p>
                    <div className="modal-promo-code">
                        Ваш промокод - <span>PROMO10</span>
                    </div>
                </div>
            </div>
        </>
    )
}
