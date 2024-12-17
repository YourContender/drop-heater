import React from 'react'
import "./Main.scss";
// import main from "../../images/custom-prod/main.jpg";
import delivery from "../../images/custom-prod/delivery.png"
import price from "../../images/custom-prod/price.png"
import order from "../../images/custom-prod/order.png"
import mainNew from "../../images/custom-prod/new-main.jpg";
import { Marquee } from '../marquee/Marquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faCommentDollar} from '@fortawesome/free-solid-svg-icons';
import { faMaximize} from '@fortawesome/free-solid-svg-icons';

export const Main = () => {
    return (
        <div className="main">
            <div className="main-wrap">
                <div className="main-block">
                    <div className="main-block-delivery">
                        <FontAwesomeIcon 
                            icon={faMaximize} 
                            className="main-block-svg"
                        />
                        <span>Доставка по території України</span>
                    </div>
                    <div className="main-block-price">
                        <FontAwesomeIcon 
                            icon={faThumbsUp} 
                            className="main-block-svg"
                        />
                        <span>Останні дні акції</span>
                    </div>
                    <div className="main-block-order">
                        <FontAwesomeIcon 
                            icon={faCommentDollar} 
                            className="main-block-svg"
                        />
                        <span>Оплата при отриманні</span>
                    </div>
                </div>
                {/* <img src={mainNew} alt="" /> */}
            </div>
            
            <Marquee/>

            <h2 className="main-custom-title">Теплий плюшевий костюм <span>преміум</span> якості</h2>
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
