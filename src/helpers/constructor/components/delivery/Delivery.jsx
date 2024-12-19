import React, { useState } from 'react';
import call from "../../img/delivery/call.jpg";
import post from "../../img/delivery/post.png";
import replace from "../../img/delivery/replace.jpg";
import manager from "../../img/manager.png";
import money from "../../img/money.png";
import way from "../../img/way.png";

import "./delivery.scss";

export const Delivery = ({ nameProduct }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="delivery">
            <div className="delivery_title">
                <h2>Доставка та оплата:</h2>
            </div>
            <div className="delivery_item">
                <img src={manager} alt="" />

                <div className="delivery_item-call">
                    <h2>Зробити замовлення на сайті заповнити всі дані вірно</h2>
                    <span>Наш менеджер Вам зателефонує для підтвердження замовлення, після чого, ми відправляємо товар на протязі 1-3 днів(залежно від загруженості)</span>
                </div>
            </div>
            <div className="delivery_item">
                <img src={way} alt="" />

                <div className="delivery_item-call">
                    <h2>Оплачуйте на Новій Пошті (накладений платіж)</h2>
                    <span>Швидко доставим на будь-яке відділення нової пошти за 1-3 дні</span>
                </div>
            </div>
            <div className="delivery_item">
                <img src={money} alt="" />

                <div className="delivery_item-call">
                    <h2>ПОВЕРНЕННЯ</h2>
                    <span>Якщо товар прийшов пошкоджений або не відповідає характеристикам - ви можете його повернути</span>
                </div>
            </div>
        </div>
    )
}
