import React from 'react'
import { Slider } from '../../../../helpers/slider/Slider';
import "./main.scss";

export const Main = ({ images, prodTitle }) => {
    return (
        <div className="main">
            <div className="main-title">
                <h1>{prodTitle}</h1>
            </div>

            <Slider data={images}/>
        </div>
    )
}
