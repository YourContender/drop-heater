import React from 'react';
import "./FooterBlock.scss";

export const FooterBlock = () => {
    return (
        <footer className="footer" id='footer'>
            <div className="footer-work">
                <h2>Графік роботи: </h2>
                <span className="footer-work-item">Понеділок: 10:00 - 21:00</span>
                <span className="footer-work-item">Вівторок: 10:00 - 21:00</span>
                <span className="footer-work-item">Середа: 10:00 - 21:00</span>
                <span className="footer-work-item">Четвер: 10:00 - 21:00</span>
                <span className="footer-work-item">П'ятниця: 10:00 - 21:00</span>
                <span className="footer-work-item">Субота: 10:00 - 16:00</span>
                <span className="footer-work-item">Неділя: вихідний</span>
            </div>
        </footer>
    )
}
