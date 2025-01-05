import React, { useState } from 'react';
import "./OrderProduct.scss";
import { MaskTel } from './mask-tel/MaskTel';
import MaskName from './mask-name/MaskName';
import { ModalOrder } from '../modal/modal-order/ModalOrder';
// import { ModalOrder } from '../../constructor/components/modal/modal-order/ModalOrder';

export const OrderProduct = ({ 
    size, 
    color, 
    orderPrice, 
    cost, 
    defaultSize, 
    defaultColor, 
    nameProduct, 
    article 
}) => {
    const [tel, setTel] = useState("");
    const [user, setUser] = useState("");
    const [sizeProduct, setSizeProduct] = useState(defaultSize);
    const [colorProduct, setColorProduct] = useState(defaultColor);
    const [successRequest, setSuccessRequest] = useState(false); 

    const [checkCorrectTel, setCheckCorrectTel] = useState("");

    const handleSetUserName = (name) => {
        setUser(name);
    };

    const handleSetTelUser = (phone) => {
        setTel(phone);
    };

    const changeSizeProduct = (size) => {
        setSizeProduct(size)
    }

    const changeColorProduct = (color) => {
        setColorProduct(color)
    }

    const closeModalOrderWindow = () => {
        setSuccessRequest(false);
        setOpenOrderModal(false);
    }

    const sendRequest = async (data) => {
        // console.log("whhhhat", tel[17]);
        
        let userData = {
            name: user,
            phone: tel,
            product: nameProduct,
            price: orderPrice,
            size: sizeProduct,
            color: defaultColor,
            article: article,
        }
        
        if (user.length >= 2 && tel[17] >= 0 && checkCorrectTel.length === 0) {
            setSuccessRequest(true);
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
            {
                successRequest ? <ModalOrder 
                    setSuccessOrder={closeModalOrderWindow}
                        tel={tel}
                        name={user}
                        size={sizeProduct}
                        color={colorProduct}
                        product="Теплий чоловічий халат"
                    /> : null
            }
            <div className="custom-prod-title">
                <h2>Замовити</h2>
            </div>

            <div className="custom-prod-price">
                <div className="custom-prod-price-old">
                    <p className="custom-prod-price-old-text">Стара ціна</p>
                    <p className="custom-prod-price-old-sum">{cost.old} грн</p>
                </div>

                <div className="custom-prod-price-new">
                    <p className="custom-prod-price-new-text">Нова ціна</p>
                    <p className="custom-prod-price-new-sum">{cost.new} грн</p>
                </div>
            </div>

            <div className="custom-prod-modal">
                <MaskName setUser={handleSetUserName}/>
                <MaskTel setTel={handleSetTelUser} setCheckCorrectTel={setCheckCorrectTel}/>

                <h2 className="custom-prod-size-title">Оберіть розмір: </h2>
                <div className="custom-prod-modal-size">
                    {
                        size.map((item, index) => {
                            return (
                                <div 
                                    key={index}
                                    className={sizeProduct === item.sm ? "custom-prod-modal-size-item current-size" : "custom-prod-modal-size-item"} 
                                    onClick={() => changeSizeProduct(item.sm)}
                                >
                                    {item.sm}
                                </div>
                            )
                        })
                    }
                </div>

                {
                    color.length > 1 ? <h2 className="custom-prod-color-title">Оберіть колір: </h2> : null
                }
                <div className="custom-prod-modal-color">
                    {
                        color.map((item, index) => {
                            return (
                                <div 
                                    key={index}
                                    className={colorProduct === item ? "custom-prod-modal-color-item current-color" : "custom-prod-modal-color-item"} 
                                    onClick={() => changeColorProduct(item)}
                                >
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>


                <div className="custom-prod-modal-send">
                    <button
                        onClick={() => sendRequest()}
                    >
                        Замовити
                    </button>
                </div>
            </div>
        </div>
    )
}
