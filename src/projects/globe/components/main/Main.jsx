import React from 'react'
import { Slider } from '../../../../helpers/slider/Slider';
import { imagesForSlider } from '../../../../data';
import "./main.scss";

export const Main = () => {
    return (
        <div className="main">
            <div className="main-title">
                <h1>Світильник настільний Місяць 3D RGB 8 см + пульт</h1>
            </div>

            <Slider data={imagesForSlider}/>
        </div>
    )
}
