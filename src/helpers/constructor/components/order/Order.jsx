import React, { useEffect, useState } from 'react';
import InputMask from "react-input-mask";
import order from "../../img/rocket.png";
import { useFormHook } from '../../../form/useFormHook';
import { ModalOrder } from '../modal/modal-order/ModalOrder';
import "./order.scss";

export const Order = ({ 
    nameProduct, 
    cost, 
    size, 
    color
}) => {
    const [classNameForSize, setClassNameForSize] = useState(0);
    const [classNameForColor, setClassNameForColor] = useState(0);
    const [oldPrice, setOldPrice] = useState(0);
    const [newPrice, setNewPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [colorSuit, setColorSuit] = useState("");

    const { 
        register, 
        handleSubmit, 
        onSubmit, 
        errors, 
        watchPhone, 
        successOrder,
        setSuccessOrder 
    } = useFormHook(nameProduct, classNameForSize, newPrice, quantity, setQuantity, colorSuit);

    useEffect(() => {
        if (size) {
            setClassNameForSize(size[0].sm);
            setOldPrice(size[0].old);
            setNewPrice(size[0].new);
        } else {
            setNewPrice(cost.new);
            setClassNameForSize("default")
        }
    }, []);

    useEffect(() => {
        if (color) {
            setClassNameForColor(size[0].sm);
        } else {
            setClassNameForColor("default")
        }
    }, []);

    const changeSizeProduct = (data) => {
        setClassNameForSize(data);

        size.map((item) => {
            if (item.sm === data) {
                setOldPrice(item.old);
                setNewPrice(item.new);
            } 
        })
    }

    const changeColorProduct = (data) => {
        setClassNameForColor(data);
        setColorSuit(data)
    }

    const changeQuantity = (action) => {
        let newQuantity = quantity;

        if (action === "plus") {
            newQuantity += 1
        } else {
            quantity !== 1 ? newQuantity -= 1 : 1;
        }

        return setQuantity(newQuantity);
    }

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
                            <span className="order-price-old-sum">{size ? oldPrice : cost.old} грн</span>
                        </div>
                        <div className="order-price-new">
                            <span className="order-price-new-text">Нова ціна</span>
                            <span className="order-price-new-sum">{size ? newPrice : cost.new} грн</span>
                        </div>
                    </> : 
                        <ModalOrder setSuccessOrder={setSuccessOrder}/>
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

                    <div className="order_quantity">
                        <span className="order_quantity-title">Кількість: </span>
                        
                        <div className="order_quantity-calc">
                            <span className="order_quantity-calc-arrow" onClick={() => changeQuantity("minus")}>{`<`}</span>
                            <span className="order_quantity-calc-number">{quantity}</span>
                            <span className="order_quantity-calc-arrow" onClick={() => changeQuantity("plus")}>{`>`}</span>
                        </div>
                    </div>

                </div>
                {
                    size ?            
                        <div className="order-size">
                            <h4>Оберіть розмір: </h4>

                            <div className="order-size-items">
                                {
                                    size.map((item, index) => {
                                        return (
                                            <span 
                                                className={classNameForSize === item.sm ? "order-size-items-item active" : "order-size-items-item"}
                                                onClick={() => changeSizeProduct(item.sm)}
                                                key={index}
                                            >
                                                {item.sm} 
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        </div> : null
                }
                {
                    color ?            
                        <div className="order-size">
                            <h4>Оберіть колір: </h4>

                            <div className="order-size-items">
                                {
                                    color.map((item, index) => {
                                        return (
                                            <span 
                                                className={classNameForColor === item.sm ? "order-size-items-item active" : "order-size-items-item"}
                                                onClick={() => changeColorProduct(item.sm)}
                                                key={index}
                                            >
                                                {item.sm} 
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        </div> : null
                }

                <div className="order-container-send">
                    <button type="submit">
                        <img src={order} alt="user" />
                        <span>Замовити</span>
                    </button>
                </div>
            </form>

            <div className="alert">
                <span>
                    Якщо ви хочете <span className="alert-curr">замовити</span> або у вас є <span className="alert-curr">питання</span>, 
                    заповніть форму вище і наш менеджер Вам зателефонує.
                </span>
            </div>
        </div>
    )
}
