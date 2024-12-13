import React from "react";
import "./header.scss";
import Timer from "../timer/Timer";

export const Header = ({ openBurger, setOpenBurger }) => {
    return (
        <header className="header">
            <div className="header_logo">   
                <Timer/>
                
            </div>
            <div 
                className={openBurger ? "header_burger active" : "header_burger"} 
                // onClick={() => setOpenBurger(!openBurger)}
            >
                <span></span>
            </div>
        </header>
    )
};
