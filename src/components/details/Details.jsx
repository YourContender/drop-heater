import React from 'react';
import { details } from '../../data.js';
import "./Details.scss";

export const Details = () => {
  return (
    <div className="details">
        <div className="details-title">
            <h1>Характеристики</h1>
        </div>

        <div className="details-container">
            {
                details.map((item, index) => {
                    return (
                        <div key={index} className={index % 2 === 0 ? "details-item" : "details-item marker"}>
                            <span className="left">{item[0]}</span>
                            <span className="right">{item[1]}</span>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
