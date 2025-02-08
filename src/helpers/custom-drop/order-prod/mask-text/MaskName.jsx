import React, { useEffect, useState } from "react";
import "./MaskName.scss";

const MaskName = ({ setUser, successRequest }) => {
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const input = e.target.value;

        if (!/^[a-zA-Zа-яА-ЯєЄіІїЇґҐ\s]*$/.test(input)) {
            setError("Ім'я може складатися тільки з букв.");
        } else {
            setError("");
        }
        setName(input);
        setUser(input);
    };

    useEffect(() => {
        setName("");
        setUser("");
    }, [successRequest])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim().length < 2) {
            setError("Ваше ім'я має містити мінімум 2 букви.");
            return;
        } 

        setError("");
    };

    return (
        <form className="user-name" onSubmit={handleSubmit}>
            <div className="user-name-box">
                <label htmlFor="name" className="form-label">
                    Ваше ім'я:
                </label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={handleInputChange}
                    placeholder="Введіть Ваше ім'я"
                    className={error ? "user-name-box-input line" : "user-name-box-input"}
                />
            </div>

            {error && <div className="user-name-error">{error}</div>}
        </form>
    );
};

export default MaskName;