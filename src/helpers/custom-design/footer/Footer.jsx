import React from 'react';
import "./footer.scss";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-work">
                <h2>Графік роботи: </h2>
                <span>Понеділок: 10:00 - 21:00</span>
                <span>Вівторок: 10:00 - 21:00</span>
                <span>Середа: 10:00 - 21:00</span>
                <span>Четвер: 10:00 - 21:00</span>
                <span>П'ятниця: 10:00 - 21:00</span>
                <span>Субота: 10:00 - 16:00</span>
                <span>Неділя: вихідний</span>
            </div>
        </div>
    )
}
