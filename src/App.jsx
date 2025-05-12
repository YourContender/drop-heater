import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./projects/home/Home";
import "./index.css";
import { GlassesProd } from "./projects/glasses/Glasses.jsx";
import { HolderProd } from "./projects/holder/Holder.jsx";
import { FanProd } from "./projects/fan/Fan.jsx";
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

                    {/* <Route path="/flower" element={<JuiceProd/>} /> 
                    <Route path="/barbecue" element={<BarbecueProd/>} /> 
                    <Route path="/wash" element={<WashProd/>} /> 
                    <Route path="/berry" element={<BerryProd/>} />  */}
                    <Route path="/glasses" element={<GlassesProd/>} /> 
                    <Route path="/holder" element={<HolderProd/>} /> 
                    <Route path="/fan" element={<FanProd/>} /> 
                </Routes>
            </Router>
        </div>
    );
};
