import React from "react";
import "./header.scss";

export const Header = ({ openBurger, setOpenBurger, nameProd }) => {
    return (
        <header className="header">
            <div className="header_logo">
                <span>{nameProd}</span>
            </div>

            <div 
                className={openBurger ? "header_burger active" : "header_burger"} 
                onClick={() => setOpenBurger(!openBurger)}
            >
                <span></span>
            </div>
        </header>
    )
};
