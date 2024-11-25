import React from 'react'
import { Slider } from '../../../../helpers/slider/Slider';
import "./main.scss";

export const Main = ({ images }) => {
    return (
        <div className="main">
            <Slider data={images}/>
        </div>
    )
}
