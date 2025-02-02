import React, { useState } from 'react';
import "./OrderProd.scss";
import { MaskTel } from './mask-phone/MaskTel';
import MaskName from './mask-text/MaskName';
import mainPhoto from "../../images/course/1.png";
// import { ModalOrder } from '../modal/modal-order/ModalOrder';
// import { ModalOrder } from '../../constructor/components/modal/modal-order/ModalOrder';

export const OrderProd = () => {
    const [tel, setTel] = useState("");
    const [user, setUser] = useState("");

    const [checkCorrectTel, setCheckCorrectTel] = useState("");

    const handleSetUserName = (name) => {
        setUser(name);
    };

    const handleSetTelUser = (phone) => {
        setTel(phone);
    };

    const sendRequest = async (data) => {
        // console.log("whhhhat", tel[17]);
        
        let userData = {
            name: user,
            phone: tel,
            product: "тренажер тест",
        }
        
        if (user.length >= 2 && tel[17] >= 0 && checkCorrectTel.length === 0) {
            // setSuccessRequest(true);
            // console.log(userData);
            

            await fetch('https://api.heater.pp.ua/send', {
                method: 'POST',
                body: JSON.stringify({
                    ...userData
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
        }
    }
    
    return (
        <div className="custom-prod" id='order'>
            <div className="header-top">
                <h1>Фітнес тренажер для преса і віджимань</h1>
            </div>
            <div className="main-wrapper">
                <div className="main-wrapper-photo">
                    <img src={mainPhoto}alt="" />
                </div>
                <div className="main-wrapper-price">
                    <div className="main-wrapper-price-block">
                        <div className="main-wrapper-price-block-left">
                            <div className="block-text">
                                Звичайна ціна
                            </div>
                            <div className="block-sum">ХХХ</div>
                        </div>
                        <div className="main-wrapper-price-block-right">
                            <div className="block-text">
                                Акційна ціна
                            </div>
                            <div className="block-sum">ХХХ</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-prod-modal">
                <MaskName setUser={handleSetUserName}/>
                <MaskTel setTel={handleSetTelUser} setCheckCorrectTel={setCheckCorrectTel}/>

                <div className="custom-prod-modal-send">
                    <button
                        onClick={() => sendRequest()}
                    >
                        Придбати зараз
                    </button>
                </div>
            </div>
        </div>
    )
}
