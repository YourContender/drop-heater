import React from 'react';
import "./SaleBlock.scss";

export const SaleBlock = ({ text, highlightedWord, img}) => {
    return (
        <div className="sale">
            <div className="sale-container">
                <h1 className="sale_title">Акційна пропозиція</h1>
                <span className="sale_math">1 + 1 = 3</span>
                <span className="sale_text">
                    {text} <span className="sale_wrap">{highlightedWord}</span>
                </span>
                <img src={img} alt="" />
            </div>
        </div>
    )
}
