import React from 'react';
import "./info.scss";

export const Info = ({ info, details, title }) => {
  return (
    <div className="info" id="info">
        <h2 className="info-title">{title} <span>преміум</span> якості</h2>
        <span>
            {info}
        </span>
        <div className="info-prod">
        {
            details.map((item, index) => {
                return (
                    <div className={index % 2 === 0 ? "info-prod-item color" : "info-prod-item"} key={index}>
                        <span className="info-prod-item-title">{item.title}</span>
                        <span className="info-prod-item-descr">{item.descr}</span>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}
