import React from 'react';
import InputMask from "react-input-mask";
import "./modalTel.scss";
import { useFormQuestion } from '../../../../form/useFormQuestion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const ModalTel = ({ setOpenModal }) => {
    const { 
        register, 
        handleSubmit, 
        onSubmit, 
        errors, 
        watchPhone, 
    } = useFormQuestion();
    
    return (
        <div className="modal-tel">
            <FontAwesomeIcon 
                className="modal-tel-close" 
                icon={faXmark} 
                onClick={() => setOpenModal(false)}
            />
            
            <h2>Якщо у вас є питання</h2>
            <span>Залиште Ваш номер телефону, наш менеджер Вам зателефонує</span>


            <form className="modal-tel-form" onSubmit={handleSubmit(onSubmit)}>
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

                <div className="modal-tel-send">
                    <button type="submit">
                        <span>Зателефонуйте мені</span>
                    </button>
                </div>
            </form>
            
        </div>
    )
}
