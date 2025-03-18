import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./projects/home/Home";
import "./index.css";
import { JuiceProd } from "./projects/juice-prod/JuiceProd.jsx";
import { BarbecueProd } from "./projects/barbecue/Barbecue.jsx";
import { WashProd } from "./projects/wash/Wash.jsx";
import { BerryProd } from "./projects/berry/Berry.jsx";
// import { CustomDesignSite } from "./projects/press-desk/CustomDesignSite.jsx";

export const App = () => {
    const hostname = window.location.hostname;
    const [subdomain] = hostname.split(".");
    console.log(window.location.hostname, subdomain);

    return (
        <div>
            <Router>
                <Routes>
                    {/* Subdomain routing with nested routes */}
                    {/* {subdomain === "fitness" && <Route path="/" element={<CustomDesignSite />} /> } */}
                    {/* {subdomain === "juice" && <Route path="/" element={<JuiceProd />} /> } */}

                    <Route path="/flower" element={<JuiceProd/>} /> 
                    <Route path="/barbecue" element={<BarbecueProd/>} /> 
                    <Route path="/wash" element={<WashProd/>} /> 
                    <Route path="/berry" element={<BerryProd/>} /> 
                </Routes>
            </Router>
        </div>
    );
};
