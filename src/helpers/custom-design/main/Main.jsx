import React from 'react'
import "./Main.scss";
import main from "../../images/custom-prod/main.jpg";
import { Marquee } from '../marquee/Marquee';

export const Main = () => {
    return (
        <div className="main">
            <img src={main} alt="" />
                <Marquee/>
            <h2>Теплий плюшевий костюм <span>преміум</span> якості <p>(Чоловічі та жіночі моделі)</p></h2>
            <div className="main-text">
                <span>
                    Костюми виконані із натурального щільного матеріалу, який буде зігрівати щодня, 
                    м'яка плюшева тканина подарує затишок у будь-яку погоду. З нашим костюмом ви 
                    будете виглядати сучасно та впевнено. Ідеально підходить як для прогулянок, 
                    так і для дому.
                </span>
            </div>
        </div>
    )
}
