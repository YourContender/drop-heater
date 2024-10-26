import React from 'react'
import { Slider } from '../../../../helpers/slider/Slider';
import "./main.scss";
import { imagesForLampSlider } from '../../../../data';

export const Main = () => {
    return (
        <div className="main">
            <div className="main-title">
                <h1>Акумуляторна лампа для кемпінгу CG-30W 1500mAh</h1>
            </div>

            <Slider data={imagesForLampSlider}/>
        </div>
    )
}
