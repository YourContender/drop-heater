import React from 'react';
import { scrollToSection } from '../../../scroll/scrollToSection';
import "./modal.scss";

export const Modal = ({ setOpenBurger, title }) => {
    const scrollSection = (section) => {
        return (
            setOpenBurger(false),
            scrollToSection(section)
        )
    }
    return (
        <div className="modal">
            <div className="modal-items">
                <span onClick={() => scrollSection("colors")}>Кольори</span>
                <span onClick={() => scrollSection("details-curr")}>{title}</span>
                <span onClick={() => scrollSection("order")}>Замовити</span>
                <span onClick={() => scrollSection("reviews")}>Відгуки</span>
            </div>
        </div>
    )
}
