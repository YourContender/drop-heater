import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./projects/home/Home";
import { MainLamp } from "./projects/lamp-project/MainLamp.jsx";
import { MainKnife } from "./projects/knife-project/MainKnife.jsx";
import { MainRubber } from "./projects/rubber-project/MainRubber.jsx";
import { MainGoose } from "./projects/goose-project/MainGoose.jsx";
import "./index.css";
import { MainColor } from "./projects/color-project/MainColor.jsx";

export const App = () => {
    const hostname = window.location.hostname;
    const [subdomain] = hostname.split(".");
    console.log(window.location.hostname, subdomain);

	return (
		<div>
			<Router>
                <Routes>
                    {/* Subdomain routing with nested routes */}
                    {subdomain === "lamp" && <Route path="/" element={<MainLamp />} /> }
                    {subdomain === "globe" && <Route path="/" element={<MainGlobe />} /> }
                    {subdomain === "cosmos" && <Route path="/" element={<MainCosmos />} /> }

                    {/* Fallback for path-based routing */}
                    <Route path="/lamp" element={<MainLamp />} />
                    <Route path="/knife" element={<MainKnife/>} />
                    <Route path="/rubber" element={<MainRubber/>} /> 
                    <Route path="/goose" element={<MainGoose/>} /> 
                    <Route path="/color" element={<MainColor/>} /> 
                </Routes>
            </Router>
		</div>
	);
};
