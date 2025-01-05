import React, { useState } from 'react';
import MaskedInput from "react-text-mask";
import "./MaskTel.scss";

export const MaskTel = ({ setTel, setCheckCorrectTel }) => {
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const phoneMask = [
        "+",
        "3",
        "8",
        "(",
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        ")",
        "-",
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        "-",
        /[0-9]/,
        /[0-9]/,
        "-",
        /[0-9]/,
        /[0-9]/,
    ];

    const handleInputChange = (e) => {
        const input = e.target.value;

        const digitsOnly = input.replace(/\D/g, ""); 
        if (digitsOnly[3] === "0" || digitsOnly[2] !== "0") {
            setError("Перевірте привильність номеру телефону!");
            setCheckCorrectTel("Перевірте привильність номеру телефону!")
        } else {
            setError("");
            setCheckCorrectTel("")
        }

        // console.log(digitsOnly.length)
        setPhone(input)
        setTel(input)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (phone.length !== 17) {
            setError("Введіть повний номер телефону!");
            setCheckCorrectTel("Перевірте привильність номеру телефону!")
            return;
        } 

        setError("");
        setCheckCorrectTel("")
    };

    return (
        <form className="user-phone" onSubmit={handleSubmit}>
            <div className="user-phone-box">
                <label htmlFor="phone" className="form-label">
                    Ваш телефон:
                </label>
                <MaskedInput
                    id="phone"
                    mask={phoneMask}
                    value={phone}
                    onChange={handleInputChange}
                    placeholder="+38(***)-***-**-**"
                    className={error ? "user-phone-input line" : "user-phone-input"}
                />
            </div>

            {error && <div className="user-phone-error">{error}</div>}
        </form>
    );
}
