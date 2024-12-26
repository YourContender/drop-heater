import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./projects/home/Home";
import "./index.css";
import { SuitManMain } from "./projects/suit-project/SuitManMain.jsx";
import { SuitWomanMain } from "./projects/suit-project/SuitWomanMain.jsx";
import { MainCustom } from "./helpers/custom-design/MainCustom.jsx";
import { RobeMan } from "./projects/easy-prod/robe/RobeMan.jsx";
import { Slippers } from "./projects/easy-prod/slippers/Slippers.jsx";

export const App = () => {
    const hostname = window.location.hostname;
    const [subdomain] = hostname.split(".");
    console.log(window.location.hostname, subdomain);

	return (
		<div>
			<Router>
                <Routes>
                    {/* Subdomain routing with nested routes */}
                    {subdomain === "suit" && <Route path="/" element={<SuitManMain />} /> }
                    {subdomain === "suitt" && <Route path="/" element={<SuitWomanMain />} /> }
                    {subdomain === "custom" && <Route path="/" element={<MainCustom />} /> }
                    {subdomain === "robe" && <Route path="/" element={<RobeMan />} /> }
                    {subdomain === "slippers" && <Route path="/" element={<Slippers />} /> }

                    {/* Fallback for path-based routing */}
                    <Route path="/robe" element={<RobeMan/>} /> 
                    <Route path="/suit" element={<SuitManMain/>} /> 
                    <Route path="/suitt" element={<SuitWomanMain/>} /> 
                    <Route path="/custom" element={<MainCustom/>} /> 
                    <Route path="/slippers" element={<Slippers/>} /> 
                </Routes>
            </Router>
		</div>
	);
};
