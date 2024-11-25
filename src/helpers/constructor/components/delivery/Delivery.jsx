import React, { useState } from 'react';
import call from "../../../images/delivery/call.jpg";
import post from "../../../images/delivery/post.png";
import replace from "../../../images/delivery/replace.jpg";
import "./delivery.scss";
import { ModalTel } from '../modal/modal-tel/ModalTel';

export const Delivery = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="delivery">
            <div className="delivery_title">
                <h2>Доставка та оплата:</h2>
            </div>
            <div className="delivery_item">
                <img src={call} alt="" />

                <div className="delivery_item-call">
                    <h2>Зробити замовлення на сайті заповнити всі дані вірно</h2>
                    <span>Ми автоматично підтверджуємо замовлення і відправляємо на протязі 1-3 днів(залежно від загруженості)</span>
                </div>
            </div>
            <div className="delivery_item">
                <img src={post} alt="" />

                <div className="delivery_item-call">
                    <h2>Оплачуйте на Новій Пошті (накладений платіж)</h2>
                    <span>Швидко доставим на будь-яке відділення нової пошти за 1-3 дні</span>
                </div>
            </div>
            <div className="delivery_item">
                <img src={replace} alt="" />

                <div className="delivery_item-call">
                    <h2>ПОВЕРНЕННЯ</h2>
                    <span>Якщо товар прийшов пошкоджений або не відповідає характеристикам - ви можете його повернути</span>
                </div>
            </div>

            <div className="delivery_question">
                <h2>Якщо у Вас виникли питання, ви можете залишити свій номер телефону, наш менеджер зв'яжеться з Вами.</h2>

                <button 
                    onClick={() => setOpenModal(true)}
                >
                    Залишити номер
                </button>
            </div>

            {openModal ? <ModalTel setOpenModal={setOpenModal}/> : null}
        </div>
    )
}
