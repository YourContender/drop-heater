import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { Modal } from '../modal/Modal';
import "./Order.scss";

export const Order = () => {
    const [openModal, setOpenModal] = useState(false);
  
    const handleOrderComplete = () => {
        setTimeout(() => {
            setOpenModal(false);

        }, 5000);
    };

    const {
		register,
		handleSubmit, 
        reset,
        watch,
		formState: { errors },
	} = useForm();

    const watchPhone = watch("phone");

	const onSubmit = (data) => {
		console.log(data);
        setOpenModal(true);
        handleOrderComplete();
        reset();
	};

    return (
        <div className="order" id="order">
            <div className="order-container">
                <div className="order-container-price">
                    <div className="order-container-price-old">
                        <span>Звичайна ціна</span>
                        <h1>2.200 грн.</h1>
                    </div>
                    <div className="order-container-price-new">
                        <span>Знижка -35%</span>
                        <h1>1.200 грн.</h1>
                    </div>
                </div>
                
                <form className="order-container-forms" onSubmit={handleSubmit(onSubmit)}>
                    <div className="order-container-forms-box">
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
                    <div className="order-container-forms-box">
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
                        <button type="submit">Оформити замовлення</button>
                    </div>
                </form>
            </div>

            { openModal && <Modal/> } 
        </div>
    )
}
