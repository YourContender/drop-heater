import React, { useEffect, useState } from 'react';
import { MaskTel } from './mask-phone/MaskTel';
import MaskName from './mask-text/MaskName';
import "./OrderProd.scss";

export const OrderProd = ({ 
    title, 
    image, 
    oldPrice, 
    newPrice, 
    setModalOpen, 
    setModalTel, 
    setModalName,
    quantityList
}) => {
    const [tel, setTel] = useState("");
    const [user, setUser] = useState("");
    const [successRequest, setSuccessRequest] = useState(false);
    const [checkCorrectTel, setCheckCorrectTel] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [quantityOrderSend, setQuantityOrderSend] = useState("null");
    const [changePriceOld, setChangePriceOld] = useState(oldPrice);
    const [changePriceNew, setChangePriceNew] = useState(newPrice);
    
    const changePriceDueToQuantity = (event) => {
        setQuantity(event.target.value);
        const forSendRequest = quantityList.filter(item => item.value === +event.target.value);
        
        setQuantityOrderSend(forSendRequest[0].message)
    }

    useEffect(() => {
        if (quantity == "7") {
            setChangePriceOld(oldPrice);
            setChangePriceNew(newPrice);
        } else {
            setChangePriceOld(quantity * oldPrice);
            setChangePriceNew(quantity * newPrice);
        }
    }, [quantity])

    const handleSetUserName = (name) => {
        setUser(name);
    };

    const handleSetTelUser = (phone) => {
        setTel(phone);
    };

    const sendRequest = async (data) => {
        let userData = {
            productId: "id_714691",
            name: user,
            phone: tel,
            product: title,
            quantity: quantityOrderSend,
            price: newPrice
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
        <div className="custom-prod" id='order-scroll'>
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
                            <div className="block-sum">{changePriceOld} грн</div>
                        </div>
                        <div className="main-wrapper-price-block-right">
                            <div className="block-text">
                                Акційна ціна 
                            </div>
                            <div className="block-sum">{changePriceNew} грн</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-prod-modal">
                <MaskName setUser={handleSetUserName} successRequest={successRequest}/>
                <MaskTel setTel={handleSetTelUser} setCheckCorrectTel={setCheckCorrectTel} successRequest={successRequest}/>

                {
                    quantityList && 
                        <div className="custom-prod-modal-quantity">
                            <label htmlFor="quantity">Виберіть кількість:</label>
                            <select id="quantity" value={quantity} onChange={changePriceDueToQuantity}>
                                {
                                    quantityList.map(item => {
                                        return (
                                            <option 
                                                value={item.value} 
                                                key={item.price}
                                            >
                                                {item.message}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                            <span className="text-attention">
                                Кількість товару Ви можете обговорити з менеджером, який Вам зателефонує після оформлення завмовлення
                                та скористатися нашими додатковими ЗНИЖКАМИ.
                            </span>
                        </div>
                }

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
