import React from 'react'
import { Card } from './card/Card';
import { cards } from '../../../clothes';
import "./cards.scss";

export const Cards = ({ setOpenOrderModal, openOrderModal, setOrderProd }) => {
    return (
        <div className="cards" id="order">
            <h1>Костюми для жінок: </h1>
            {
                cards.map(item => {
                    return (
                        <Card 
                            key={item.id}
                            images={item.images}
                            oldPrice={item.oldPrice}
                            price={item.price}
                            sale={item.sale}
                            color={item.color}
                            sizeTop={item.sizeTop}
                            sizeBottom={item.sizeBottom}
                            material={item.material}
                            setOpenOrderModal={setOpenOrderModal}
                            openOrderModal={openOrderModal}
                            setOrderProd={setOrderProd}
                        />
                    )
                })
            }
        </div>
    )
}
