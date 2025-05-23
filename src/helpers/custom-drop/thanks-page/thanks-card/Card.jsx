import React, { useState } from 'react'
import { Slider } from '../../../slider/Slider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "../ThanksPage.scss"

export const Card = ({ 
    images, 
    title, 
    sale, 
    percent, 
    oldPrice, 
    newPrice, 
    details,
    sendRequestUpsell,
    id
}) => {
    const [isOpenOther, setIsOpenOther] = useState(false);

    const product = {
        name: "Ноутбук XYZ",
        // details: ["Процессор: Intel i7", "ОЗУ: 16GB", "SSD: 512GB"],
        details: [
            {
                t: "Процессор:",
                d: "Intel i7"
            },
            {
                t: "ОЗУ:",
                d: "16GB"
            },
            {
                t: "SSD:",
                d: "512GB"
            },
        ],
    };

    return (
        <div className="modal_market-list-card">
            <h3 className="card-title">{title}</h3>
            <Slider data={images} />

            <div className="card-poster">
                <div className="card-poster-text">
                    <span>
                        {sale}
                        <span className="card-poster-text-percent"> {percent}</span>
                    </span>
                </div>
            </div>

            <button className="toggle-btn" onClick={() => setIsOpenOther(!isOpenOther)}>
                Детальніше {isOpenOther ? 
                    <FontAwesomeIcon className="arrow-icon" icon={faAngleUp} /> 
                    : 
                    <FontAwesomeIcon className="arrow-icon" icon={faAngleDown}/>
                }
            </button>
            <div className={`thanks-details ${isOpenOther ? "open" : ""}`}>
                <ul>
                    {details.map((detail, index) => (
                        <li key={index}>
                            <span className="thanks-details-title">{detail.t}</span>
                            <span className="thanks-details-descr">{detail.d}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="card-price">
                <div className="card-price-old">{oldPrice} грн</div>
                <div className="card-price-new">{newPrice} грн</div>
            </div>

            <button className="card-btn" onClick={(e) => {
                // e.stopPropagation();
                sendRequestUpsell(title, newPrice, id);
            }}>
                Замовити
            </button>
        </div>
    )
}
