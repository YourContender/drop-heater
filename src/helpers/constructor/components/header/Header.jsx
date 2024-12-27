import React from "react";
import "./header.scss";
import test from "../../img/logos/lamp.png";
import CountdownTimer from "../countdown-timer/CountdownTimer";

export const Header = ({ openBurger, setOpenBurger }) => {
    return (
        <header className="header">
            <div className="header_logo">   
                <CountdownTimer/>
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
