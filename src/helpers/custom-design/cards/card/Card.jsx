import React from 'react'
import { Slider } from '../../../slider/Slider';
import "./card.scss";
import sale from "../../../images/custom-prod/sale.png";

import w1 from "../../../images/suit-prod/woman/1.jpg";
import w2 from "../../../images/suit-prod/woman/2.jpg";
import w3 from "../../../images/suit-prod/woman/3.jpg";
import w4 from "../../../images/suit-prod/woman/4.jpg";
import w5 from "../../../images/suit-prod/woman/5.jpg";
import w6 from "../../../images/suit-prod/woman/6.jpg";
import w7 from "../../../images/suit-prod/woman/7.jpg";
import w8 from "../../../images/suit-prod/woman/8.jpg";
import w9 from "../../../images/suit-prod/woman/9.jpg";
import w10 from "../../../images/suit-prod/woman/10.jpg";


const imagesForSuitWomanSlider = [
	w1,
	w2,
	w3,
	w4,
	w5,
	w6,
	w7,
	w8,
	w9,
	w10,
];

export const Card = () => {
    return (
        <div className="card">
            {/* 
                // slider
                // price
                // size
                // order 
            */}
            <Slider data={imagesForSuitWomanSlider}/>

            <div className="card-title">
                <h3>Жіночий теплий костюм преміум якості</h3>
            </div>

            <div className="card-color">
                <span>Колір:</span>
                <span>графіт</span>
            </div>
            
            <div className="card-price">
                <div className="card-price-old">
                    <span>Стара ціна: </span>
                    <span className="line">2070 грн</span>
                </div>
                <div className="card-price-new">
                    <span>Нова ціна: </span>
                    <span className="curr">1099 грн</span>
                </div>
            </div>

            <div className="card-size">
                <div className="card-size-title">
                    <span>Оберіть розмір: </span>
                </div>
                <div className="card-size-list">
                    <div className="card-size-list-little">
                        <span className="card-size-item current">S</span>
                        <span className="card-size-item">M</span>
                        <span className="card-size-item">L</span>
                        <span className="card-size-item ">XL</span>
                    </div>
                    <div className="card-size-list-big">
                        <span className="card-size-item">2XL</span>
                        <span className="card-size-item">3XL</span>
                    </div>
                </div>
            </div>

            <div className="card-order">
                <button>Замовити</button>
            </div>
        </div>
    )
}
