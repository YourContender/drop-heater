import React from 'react';
import "./FooterBlock.scss";

export const FooterBlock = () => {
    return (
        <footer className="footer" id='footer'>
            <div className="footer-work">
                <h2>Графік роботи: </h2>
                <span className="footer-work-item">Пн-Сб: 10:00 - 21:00</span>
                <span className="footer-work-item">Неділя - вихідний</span>
                <span className="footer-work-item">beautiful-flower21@gmail.com</span>
                <span className="footer-work-item"></span>
            </div>
        </footer>
    )
}
