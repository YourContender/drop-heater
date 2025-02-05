import React from 'react';
import "./DetailsBlock.scss";

export const DetailsBlock = ({ details }) => {
    return (
        
        <div className="details-wrapper">
            <div className="details-wrapper-title">
                <h2>Характеристики</h2>
            </div>
            <div className="details-wrapper-list">
                {
                    details.map((item, index) => {
                        return (
                            <div className={index % 2 !== 0 ? "details-wrapper-list-item" : "details-wrapper-list-item special"} key={index}>
                                <span>{item.title} </span>
                                <span className="descr">{item.descr}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="details-wrapper-btn">
                <button>Замовити</button>
            </div>
        </div>
    )
}
