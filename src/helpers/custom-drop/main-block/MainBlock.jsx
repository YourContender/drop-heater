import React, { useState, useEffect } from 'react';
import { scrollToSection } from "../../scroll/scrollToSection";
import "./MainBlock.scss";
import cart from "../../images/cart.png";

export const MainBlock = ({ src, oldPrice, newPrice }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [num, setNum] = useState(0);

    useEffect(() => {
        setNum(Math.floor(Math.random() * (30 - 20 + 1)) + 20)
        const orderSection = document.getElementById("order");
        const footer = document.querySelector("footer"); 
        const delivery = document.querySelector("delivery-prod"); 

        const observer = new IntersectionObserver(
            (entries) => {
                const isIntersecting = entries.some(entry => entry.isIntersecting);
                setIsVisible(!isIntersecting);
            },
            { root: null, threshold: 1.0 }
        );

        if (orderSection) observer.observe(orderSection);
        if (footer) observer.observe(footer);
        if (delivery) observer.observe(delivery);

        return () => {
            if (orderSection) observer.unobserve(orderSection);
            if (footer) observer.unobserve(footer);
            if (delivery) observer.unobserve(delivery);
        };
    }, []);

    return (
        <div className="main-wrapper">
            <div className="main-wrapper-photo">
                <img src={src}alt="" />
            </div>
            <div className="main-wrapper-price">
                <div className="main-wrapper-price-block">
                    <div className="main-wrapper-price-block-left">
                        <div className="block-text">
                            Звичайна ціна
                        </div>
                        <div className="block-sum">{oldPrice}</div>
                    </div>
                    <div className="main-wrapper-price-block-right">
                        <div className="block-text">
                            Акційна ціна
                        </div>
                        <div className="block-sum">{newPrice}</div>
                    </div>
                </div>
            </div>
            <div className="main-wrapper-btn">
                <button onClick={() => scrollToSection("order")}>Замовити</button>
            </div>

            {isVisible && (
                <div className="main-quantity-order">
                    <span className="main-quantity-order-title">Замовлень сьогодні: </span>
                    <div className="main-quantity-order-block">
                        <img src={cart} alt="" />
                        <span>{num}</span>
                    </div>
                </div>
            )}
        </div>
    )
}