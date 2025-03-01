import React from 'react'
import "./ModalThanks.scss";

export const ModalThanks = ({ onClose }) => {
    return (
        <div className="modal-thanks">
            <div className="modal-wrap">
                <p className="modal-thanks-title">Спасибо за заказ!</p>
                <p className="modal-thanks-text">Ми з вами зв'яжемося найближчим часом.</p>
                <button onClick={onClose} className="close-thanks-button">
                    Закрыть
                </button>
            </div>
        </div>
    )
}
