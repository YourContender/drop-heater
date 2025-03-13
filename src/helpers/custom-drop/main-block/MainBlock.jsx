import React, { useState, useEffect } from 'react';
import { scrollToSection } from "../../scroll/scrollToSection";
import "./MainBlock.scss";
import cart from "../../images/cart.png";

export const MainBlock = ({ src, oldPrice, newPrice }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [num, setNum] = useState(0);

    useEffect(() => {
        setNum(Math.floor(Math.random() * (30 - 20 + 1)) + 20);
    
        const orderSection = document.getElementById("order");
        const footer = document.querySelector("footer");
        const delivery = document.querySelector(".delivery-prod");
    
        const handleScroll = () => {
            const orderRect = orderSection?.getBoundingClientRect();
            const footerRect = footer?.getBoundingClientRect();
            const deliveryRect = delivery?.getBoundingClientRect();
    
            const isOrderVisible = orderRect && orderRect.top < window.innerHeight && orderRect.bottom > 0;
            const isDeliveryVisible = deliveryRect && deliveryRect.top < window.innerHeight && deliveryRect.bottom > 0;
            const isFooterVisible = footerRect && footerRect.top < window.innerHeight;
    
            setIsVisible(!isOrderVisible && !isDeliveryVisible && !isFooterVisible);
        };
    
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Вызываем сразу, чтобы учесть текущую позицию
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
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
                        <div className="block-sum">{oldPrice} грн</div>
                    </div>
                    <div className="main-wrapper-price-block-right">
                        <div className="block-text">
                            Акційна ціна
                        </div>
                        <div className="block-sum">{newPrice} грн</div>
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