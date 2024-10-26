import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import order from "../../img/rocket.png";
import "./order.scss";

export const Order = () => {
    const [successOrder, setSuccessOrder] = useState(false);

    const {
		register,
		handleSubmit, 
        reset,
        watch,
		formState: { errors },
	} = useForm();

    const watchPhone = watch("phone");

    const sendRequest = async (data) => {
        let userDate = {
            name: data.name,
            phone: data.phone,
            product: "cвітильник настільний"
        }

        await fetch('https://api.heater.pp.ua/send', {
            method: 'POST',
            body: JSON.stringify({
                ...userDate
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    const onSubmit = (data) => {
        setSuccessOrder(true);
		sendRequest(data);
        reset();
        setTimeout(() => {
            setSuccessOrder(false);
        }, 3000)
	};

    return (
        <div className="order" id="order">
            <div className="order-title">
                <h2>Замовити:</h2>
            </div>

            <div className="order-price">
                {
                    !successOrder ? 
                    <>
                        <div className="order-price-old">
                            <span className="order-price-old-text">Стара ціна</span>
                            <span className="order-price-old-sum">650 грн</span>
                        </div>
                        <div className="order-price-new">
                            <span className="order-price-new-text">Нова ціна</span>
                            <span className="order-price-new-sum">465 грн</span>
                        </div>
                    </> : 
                        <div className="order-price-message">
                            <span>
                                Дякуємо за замовлення. Наш менеджер зв'яжеться з Вами!
                            </span>
                        </div>
                }
            </div>

            <form className="order-container-forms" onSubmit={handleSubmit(onSubmit)}>
                <div className="order-container-forms-box first">
                    <label className={errors.name ? "label_error" : null} htmlFor="name">
                        Ваше ім'я:
                    </label>

                    {errors.name && <p className="error">{errors.name.message}</p>}
                    
                    <input 
                        type="text" 
                        id="name"
                        placeholder="Ваше ім'я" 
                        className={errors.name ? "input_error" : null}
                        {...register("name", { 
                            required: "Ім'я обов'язкове", 
                        })}    
                    />
                </div>
                <div className="order-container-forms-box second">
                    <label className={errors.phone ? "label_error" : null} htmlFor="name">
                        Ваш телефон:
                    </label>

                    {errors.phone && <p className="error">{errors.phone.message}</p>}

                    <InputMask
                        mask="+38099-999-99-99"
                        maskChar={null}
                        value={watchPhone || ""}
                        {...register("phone", {
                            required: "Телефон обов'язковий",
                            pattern: {
                                value: /^\+380\d{2}-\d{3}-\d{2}-\d{2}$/,
                                message: "Невірний формат телефону",
                            },
                        })}
                    >
                        {(inputProps) => (
                            <input
                                {...inputProps}
                                className={errors.phone ? "input_error" : null}
                                type="tel"
                                id="phone"
                                placeholder="Ваш номер телефону"
                            />
                        )}
                    </InputMask>
                </div>

                <div className="order-container-send">
                    <button type="submit">
                        <img src={order} alt="user" />
                        <span>Замовити</span>
                    </button>
                </div>
            </form>

        </div>
    )
}
