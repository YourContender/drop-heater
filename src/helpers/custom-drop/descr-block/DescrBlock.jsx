import React from 'react';
import "./DescrBlock.scss";

export const DescrBlock = ({ 
    title, 
    subtitle, 
    firstImage, 
    descrList, 
}) => {
    return (
        <div className="descr-wrapper">
            <div className="descr-wrapper-title">
                <h2>
                    {title}
                </h2>
            </div>
            <div className="descr-wrapper-subtitle">
                <span>
                    {subtitle}
                </span>
                <img src={firstImage} alt="" />
            </div>
            <div className="descr-wrapper-text">
                {
                    descrList.map((item, index) => {
                        switch (item.type) {
                            case "photo" : 
                                return <img src={item.image} alt="" key={index}/>;
                            case "text" :
                                return (
                                    <span key={index}>
                                        <span className="special-text">{item.boldType} </span> 
                                        {item.descr}
                                    </span>
                                )
                            default : 
                                return null;
                        }
                    })
                }

            </div>
        </div>
    )
}
