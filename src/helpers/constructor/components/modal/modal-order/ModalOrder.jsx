import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import "./modalOrder.scss";

export const ModalOrder = ({ setSuccessOrder, tel, name, size, color, product }) => {
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
                
                <h4 className="modal-content-subtitle">Заявка успішно оформлена</h4>

                <div className="modal-content-ordered">
                    
                    <div className="modal-content-ordered-item">
                        <p>Ім'я: </p>
                        <p>{name}</p>
                    </div>
                    <div className="modal-content-ordered-item">
                        <p>Телефон: </p>
                        <p>{tel}</p>
                    </div>
                    <div className="modal-content-ordered-item">
                        <p>Розмір: </p>
                        <p>{size}</p>
                    </div>
                    <div className="modal-content-ordered-item">
                        <p>Колір: </p>
                        <p>{color}</p>
                    </div>
                    
                </div>

                {/* <div className="modal-promo">
                    <p className="modal-promo-message">
                        Для Вас є чудова пропозиція, даруємо Вам промокод <span>-10% </span>
                        на додадкову одиницю замовленого Вами товару. Просто назвіть його менеджеру і додадкова знижка буде активована.
                    </p>
                    <div className="modal-promo-code">
                        Ваш промокод - <span>PROMO10</span>
                    </div>
                </div> */}
            </div>
        </>
    )
}
