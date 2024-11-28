import React from 'react';
import "./details.scss";

export const Details = ({ details, equipment, title, other }) => {
    return (
        <div className="details" id="details">
            <div className="details-title">
                <h2>{title}: </h2>
            </div>
            {
                details.map((item, index) => {
                    return (
                        <div className={index % 2 === 0 ? "details-item color" : "details-item"} key={index}>
                            <span className="details-item-title">{item.title}</span>
                            <span className="details-item-descr">{item.descr}</span>
                        </div>
                    )
                })
            }

            <div className="details-other">
                <div className="details-other-title">
                    {
                        equipment.length !== 0 ? <h2>{other}:</h2> : null
                    }
                </div>
                {
                    equipment.map((item, index) => {
                        return (
                            <div className={index % 2 === 0 ? "details-item color" : "details-item"} key={index}>
                                <span className="details-item-title">{item}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
