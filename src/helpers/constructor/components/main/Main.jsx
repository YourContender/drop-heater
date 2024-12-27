import React from 'react'
import { Slider } from '../../../../helpers/slider/Slider';
import "./main.scss";

export const Main = ({ images }) => {
    return (
        <div className="main" id="colors">
            <Slider data={images}/>
        </div>
    )
}
