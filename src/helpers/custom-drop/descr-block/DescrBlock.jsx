import React from 'react';
import "./DescrBlock.scss";
import gif from "../../images/2.avif"

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
                            case "advantages" :
                                return (
                                    <div className="descr-wrapper-text-list" key={index}>
                                        <div className="list-title">
                                            <h3>{item.titleAdvantage}</h3>
                                        </div>
                                        <div className="list-items">
                                            {
                                                item.listAdvantage.map((item, index) => {
                                                    return <span key={index}>{item}</span>
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            case "use" :
                                return (
                                    <div className="descr-wrapper-text-list" key={index}>
                                        <div className="list-title">
                                            <h3>{item.titleUse}</h3>
                                        </div>
                                        <div className="list-items">
                                            {
                                                item.listUse.map((item, index) => {
                                                    return <span key={index}>{item}</span>
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            case "package" :
                                return (
                                    <div className="descr-wrapper-text-list" key={index}>
                                        <div className="list-title">
                                            <h3>{item.titlePackage}</h3>
                                        </div>
                                        <div className="list-items">
                                            {
                                                item.listPackage.map((item, index) => {
                                                    return <span key={index}>{item}</span>
                                                })
                                            }
                                        </div>
                                    </div>
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
