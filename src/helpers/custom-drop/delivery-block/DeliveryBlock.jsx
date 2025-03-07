import React from 'react';
import delivery from "./delivery.png";
import "./DeliveryBlock.scss";

export const DeliveryBlock = () => {
    return (
        <div className="delivery-prod" id="delivery">
            <img className="delivery-prod-img" src={delivery} alt="" />
        </div>
    )
}
