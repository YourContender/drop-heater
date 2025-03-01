import { thanksPage } from "../../../pageConfig";
import { Slider } from "../../slider/Slider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import "./ThanksPage.scss";
import { useEffect, useCallback } from "react";

export const ThanksPage = ({ isOpen, onClose, modalTel, modalName, setModalName, setModalTel }) => {
    if (!isOpen) return null;

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto"; // Очистка при размонтировании
        };
    }, []);

    const closeModal = useCallback(() => {
        document.body.style.overflow = "auto";
        onClose(); 
        setModalName("");
        setModalTel("")
    }, [onClose]);

    const sendUpsell = async (title, price) => {
        let upsell = {
            name: modalName,
            phone: modalTel,
            product: title,
            price: price,
            status: "Дозамовлення"
        };

        console.log(upsell);

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
                <p>Менеджер зв’яжеться з вами найближчим часом за номером {modalTel}.</p>
                <span>Якщо ви допустили помилку, поверніться на сторінку замовлення та відправте форму повторно.</span>
                <button className="close-button" onClick={closeModal}>ПОВЕРНУТИСЯ</button>
                <div className="close-modal" onClick={closeModal}>
                    <FontAwesomeIcon className="list-services-icon" icon={faXmark} />
                </div>
            </div>

            <div className="modal_market">
                <div className="modal_market-title">
                    <h2>Також ви можете додати до своєї покупки наступні товари:</h2>
                </div>
                <div className="modal_market-list">
                    {thanksPage.map((item, index) => (
                        <div className="modal_market-list-card" key={index}>
                            <h3 className="card-title">{item.title}</h3>
                            <Slider data={item.images} />

                            <div className="card-poster">
                                <div className="card-poster-text">
                                    <span>
                                        {item.saleMessage}
                                        <span className="card-poster-text-percent"> -{item.percent}%</span>
                                    </span>
                                </div>
                            </div>

                            <div className="card-price">
                                <div className="card-price-old">{item.old} грн</div>
                                <div className="card-price-new">{item.new} грн</div>
                            </div>

                            <button className="card-btn" onClick={(e) => {
                                e.stopPropagation();
                                sendUpsell(item.title, item.new);
                            }}>
                                Замовити
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
