import React, { useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import "./CustomModal.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MaskTel } from './mask-tel/MaskTel';
import MaskName from './mask-name/MaskName';
import { ModalOrder } from '../../constructor/components/modal/modal-order/ModalOrder';

export const CustomModal = ({ setOpenOrderModal, orderProd }) => {
    const [tel, setTel] = useState("");
    const [user, setUser] = useState("");
    const [successRequest, setSuccessRequest] = useState(false); 

    const handleSetUserName = (name) => {
        setUser(name);
    };

    const handleSetTelUser = (phone) => {
        setTel(phone);
    };

    const closeModalOrderWindow = () => {
        setSuccessRequest(false);
        setOpenOrderModal(false);
    }

    const sendRequest = async (data) => {
        let userData = {
            name: user,
            phone: tel,
            product: "Жіночий теплий костюм",
            price: orderProd.price.price,
            size: orderProd.size.size,
            color: orderProd.color.color
        }
        
        setSuccessRequest(true);

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
    
    return (
        <div className="custom">
            {
                successRequest ? <ModalOrder setSuccessOrder={closeModalOrderWindow}/> : null
            }
            <div className="custom-modal">
                <button className="custom-modal-close">                             
                    <FontAwesomeIcon 
                        icon={faXmark} 
                        onClick={() => setOpenOrderModal(false)}/>
                </button>

                <div className="custom-modal-title">
                    <h2>Жіночий теплий костюм <span>преміум</span> якості</h2>
                </div>

                <div className="custom-modal-descr">
                    <div className="custom-modal-descr-color">
                        <span>Колір: </span>
                        <span>{orderProd.color.color}</span>
                    </div>
                    <div className="custom-modal-descr-size">
                        <span>Розмір</span>
                        <span>{orderProd.size.size}</span>
                    </div>
                    <div className="custom-modal-descr-price">
                        <span>Ціна</span>
                        <span className="custom-modal-descr-price-sum">{orderProd.price.price} грн</span>
                    </div>
                </div>
                <MaskName setUser={handleSetUserName}/>
                <MaskTel setTel={handleSetTelUser}/>
                <div className="custom-modal-send">
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
