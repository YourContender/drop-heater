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
    quantityList,
    productId,
    sizeProduct, 
    defaultSize
}) => {
    const [tel, setTel] = useState("");
    const [user, setUser] = useState("");
    const [successRequest, setSuccessRequest] = useState(false);
    const [checkCorrectTel, setCheckCorrectTel] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [quantityOrderSend, setQuantityOrderSend] = useState("null");
    const [changePriceOld, setChangePriceOld] = useState(oldPrice);
    const [changePriceNew, setChangePriceNew] = useState(newPrice);
    const [changeSize, setChangeSize] = useState(1);
    const [sendSize, setSendSize] = useState();

    const changeSizeProductAndPrice = (num, newPrice, oldPrice, item) => {
        setChangeSize(num);
        setChangePriceNew(newPrice);
        setChangePriceOld(oldPrice);
        setSendSize(item)
    }
    
    const changePriceDueToQuantity = (event) => {
        setQuantity(event.target.value);
        const forSendRequest = quantityList.filter(item => item.value === +event.target.value);
        
        setQuantityOrderSend(forSendRequest[0].message)
    }

    useEffect(() => {
        setChangePriceOld(oldPrice);
        setChangePriceNew(newPrice);
        setSendSize(defaultSize);
    }, [])

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
            productId: sendSize.initId ? sendSize.initId : defaultSize.id,
            name: user,
            phone: tel,
            product: title,
            // quantity: quantityOrderSend,
            price: changePriceNew,
            size: sendSize.size 
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
            // console.log(userData);
            
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

                <div className="main-change-size">
                    <h2>Оберіть довжину шлангу:</h2>

                    <div className="main-change-size-list">
                        {
                            sizeProduct.map((item, index) => {
                                return (
                                    <div 
                                        className={`${changeSize === index + 1 ? "main-change-size-list-current" : "main-change-size-list-item"}`} 
                                        key={index}
                                        onClick={() => changeSizeProductAndPrice(index + 1, item.priceNew, item.priceOld, item)}
                                    >
                                        {item.size}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="custom-prod-modal">
                <MaskName setUser={handleSetUserName} successRequest={successRequest}/>
                <MaskTel setTel={handleSetTelUser} setCheckCorrectTel={setCheckCorrectTel} successRequest={successRequest}/>

                {/* {
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
                } */}

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
