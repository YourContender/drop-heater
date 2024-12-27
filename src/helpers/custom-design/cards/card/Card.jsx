import React, { useState } from 'react'
import { Slider } from '../../../slider/Slider';
import "./card.scss";

export const Card = ({ 
    images, 
    oldPrice, 
    price, 
    sale, 
    color, 
    sizeTop, 
    sizeBottom, 
    material, 
    setOpenOrderModal, 
    setOrderProd
}) => {
    const [changeSize, setChangeSize] = useState("S");

    const placingOrder = (size) => {
        const data = {
            title: "Жіночий теплий костюм преміум якості",
            color: {color},
            price: {price},
            size: {size}
        }
        setOrderProd(data);
        setOpenOrderModal(true);
    }

    return (
        <div className="card">
            <Slider data={images}/>

            <div className="card-title">
                <h3>Жіночий теплий костюм преміум якості</h3>
            </div>

            <div className="card-color">
                <span>Колір:</span>
                <span>{color}</span>
            </div>
            
            <div className="card-material">
                <span>Матеріал:</span>
                <span>{material}</span>
            </div>
            
            <div className="card-price">
                <div className="card-price-old">
                    <span>Стара ціна: </span>
                    <span className="line">{oldPrice} грн</span>
                </div>
                <div className="card-price-new">
                    <span>Нова ціна: </span>
                    <span className="curr">{price} грн</span>
                </div>
            </div>

            <div className="card-sale">
                <span>Знижка:</span>
                <span className="card-sale-percent">-{sale}</span>
            </div>

            <div className="card-size">
                <div className="card-size-title">
                    <span>Оберіть розмір: </span>
                </div>
                <div className="card-size-list">
                    <div className="card-size-list-little">
                        {/* <span className="card-size-item current">S</span> */}
                        
                        {
                            sizeTop.map((item, index) => {
                                return (
                                    <span 
                                        className={changeSize === item ? "card-size-item current" : "card-size-item"} 
                                        key={index}
                                        onClick={() => setChangeSize(item)}
                                    >
                                        {item}
                                    </span>
                                )
                            })
                        }
                    </div>
                    <div className="card-size-list-big">
                        {
                            sizeBottom.map((item, index) => {
                                return (
                                    <span 
                                        className={changeSize === item ? "card-size-item current" : "card-size-item"} 
                                        key={index} 
                                        onClick={() => setChangeSize(item)}
                                    >
                                        {item}
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="card-order">
                <button onClick={() => placingOrder(changeSize)}>Замовити</button>
            </div>

            
        </div>
    )
}
