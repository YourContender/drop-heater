import React from 'react'
import { Card } from './card/Card';
import "./cards.scss";

export const Cards = () => {
    return (
        <div className="cards">
            <h1>Костюми для жінок: </h1>
            <Card/>
        </div>
    )
}
