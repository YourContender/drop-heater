import React from "react";
import "./header.scss";
import test from "../../img/logos/lamp.png";

export const Header = ({ openBurger, setOpenBurger }) => {
    return (
        <header className="header">
            {/* <div className="header_logo">   
                <img src={test} alt="hui" />
            </div> */}

            <div 
                className={openBurger ? "header_burger active" : "header_burger"} 
                onClick={() => setOpenBurger(!openBurger)}
            >
                <span></span>
            </div>
        </header>
    )
};
