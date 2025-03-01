import React, { useState } from 'react';
import { MaskTel } from './mask-phone/MaskTel';
import MaskName from './mask-text/MaskName';
import "./OrderProd.scss";

export const OrderProd = ({ title, image, oldPrice, newPrice, setModalOpen, setModalTel, setModalName}) => {
    const [tel, setTel] = useState("");
    const [user, setUser] = useState("");
    const [successRequest, setSuccessRequest] = useState(false);

    const [checkCorrectTel, setCheckCorrectTel] = useState("");

    const handleSetUserName = (name) => {
        setUser(name);
    };

    const handleSetTelUser = (phone) => {
        setTel(phone);
    };

    const sendRequest = async (data) => {
        let userData = {
            name: user,
            phone: tel,
            product: title,
        }
        
        if (user.length >= 2 && tel[17] >= 0 && checkCorrectTel.length === 0) {
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
            setSuccessRequest(true);
            setModalOpen(true);
            setModalTel(tel);
            setModalName(user);
        }
    }
    
    return (
        <div className="custom-prod">
            <div className="header-top">
                <h1>{title}</h1>
            </div>
            <div className="main-wrapper">
                <div className="main-wrapper-photo">
                    <img src={image}alt="" />
                </div>
                <div className="main-wrapper-price" id='order'>
                    <div className="main-wrapper-price-block">
                        <div className="main-wrapper-price-block-left">
                            <div className="block-text">
                                Звичайна ціна
                            </div>
                            <div className="block-sum">{oldPrice}</div>
                        </div>
                        <div className="main-wrapper-price-block-right">
                            <div className="block-text">
                                Акційна ціна
                            </div>
                            <div className="block-sum">{newPrice}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-prod-modal">
                <MaskName setUser={handleSetUserName} successRequest={successRequest}/>
                <MaskTel setTel={handleSetTelUser} setCheckCorrectTel={setCheckCorrectTel} successRequest={successRequest}/>

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
