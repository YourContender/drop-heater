// import { Slider } from "../../slider/Slider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import "./ThanksPage.scss";
import { useState } from "react";
import { Card } from "./thanks-card/Card";

export const ThanksPage = ({ 
    thanksPage, 
    isOpen, 
    onClose, 
    modalTel, 
    modalName, 
    setModalName, 
    setModalTel 
}) => {
    const [openModalThk, setOpenModalTnk] = useState(false);

    if (!isOpen) return null;

    const sendRequestUpsell = (title, newPrice, id) => {
        sendUpsell(title, newPrice, id);
        setOpenModalTnk(true);
    }

    const closeModal = (() => {
        onClose(); 
        setModalName("");
        setModalTel("");
    });

    const sendUpsell = async (title, price, id) => {
        let upsell = {
            name: modalName,
            phone: modalTel,
            product: title,
            price: price,
            status: "Дозамовлення",
            productId: id 
        };

        // console.log(upsell);

        await fetch('https://api.heater.pp.ua/send', {
            method: 'POST',
            body: JSON.stringify(upsell),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{modalName}, дякуємо за замовлення!</h2>
                <p>Менеджер зв’яжеться з Вами найближчим часом за номером {modalTel}.</p>
                <span>Якщо ви допустили помилку, поверніться на сторінку замовлення та відправте форму повторно.</span>
                <button className="close-button" onClick={closeModal}>ПОВЕРНУТИСЯ</button>
                <div className="close-modal" onClick={closeModal}>
                    <FontAwesomeIcon className="list-services-icon" icon={faXmark} />
                </div>
            </div>

            <div className="modal_market">
                <div className="modal_market-title">
                    <h2>Даруємо Вам додаткову знижку на наші кращі товари:</h2>
                </div>
                <div className="modal_market-list">
                    {thanksPage.map((item, index) => (
                        <Card 
                            key={index}
                            images={item.images} 
                            title={item.title}   
                            sale={item.saleMessage}
                            percent={item.percent}
                            oldPrice={item.old}
                            newPrice={item.new}
                            sendRequestUpsell={sendRequestUpsell}
                            details={item.details}
                            id={item.productId}
                        />
                    ))}
                </div>
            </div>
            {
                openModalThk && 
                    <div className="modal-wrapper">
                        <div className="modal-body">
                            <h1>
                                Дякуємо Вам, за додаткове замовлення, наш менеджер зв'яжеться з Вами незабаром.
                            </h1>
                            <FontAwesomeIcon 
                                className="modal-body-btn" 
                                onClick={() => setOpenModalTnk(false)} 
                                icon={faXmark} 
                            />
                        </div>
                    </div>
            }
        </div>
    );
};