import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./projects/home/Home";
import "./index.css";
import { FanProd } from "./projects/fan/Fan.jsx";
import { HoseProd } from "./projects/hose/Hose.jsx";
import { BlasterProd } from "./projects/blaster/Blaster.jsx";
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

                    <Route path="/fan" element={<FanProd/>} /> 
                    <Route path="/hose" element={<HoseProd/>} /> 
                    <Route path="/blaster" element={<BlasterProd/>} /> 
                </Routes>
            </Router>
        </div>
    );
};
