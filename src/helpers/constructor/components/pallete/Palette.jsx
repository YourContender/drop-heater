import React, { useState } from 'react';
import "./Palette.scss";
import { cardsProductsWomanSuits } from '../../../../clothes';

export const Palette = ({ changeColor, color }) => {
    const chooseNewColor = (currentColor) => {
        changeColor(currentColor);
    }

    return (
        <div className="palette">
            <div className="palette-title">
                <h2>Оберіть колір: </h2>
            </div>


            <div className="palette-list">
                {
                    cardsProductsWomanSuits.map(item => {
                        return (
                            <div 
                                key={item.id}
                                className={color === item.color ? "palette-list-item current" : "palette-list-item"}
                                style={{backgroundColor: `${item.backgroundColor}`}}
                                onClick={() => chooseNewColor(item.color)}
                            >
                                <span>{item.color}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}