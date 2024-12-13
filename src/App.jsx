import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./projects/home/Home";
import { MainLamp } from "./projects/lamp-project/MainLamp.jsx";
import { MainKnife } from "./projects/knife-project/MainKnife.jsx";
import { MainRubber } from "./projects/rubber-project/MainRubber.jsx";
import { MainGoose } from "./projects/goose-project/MainGoose.jsx";
import "./index.css";
import { MainColor } from "./projects/color-project/MainColor.jsx";
import { MainHoodie } from "./projects/hoodie-project/MainHoodie.jsx";
import { SuitManMain } from "./projects/suit-project/SuitManMain.jsx";
import { SuitWomanMain } from "./projects/suit-project/SuitWomanMain.jsx";
import { MainCustom } from "./helpers/custom-design/MainCustom.jsx";

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
                    {subdomain === "knife" && <Route path="/" element={<MainKnife />} /> }
                    {subdomain === "rubber" && <Route path="/" element={<MainRubber />} /> }
                    {subdomain === "goose" && <Route path="/" element={<MainGoose />} /> }
                    {subdomain === "color" && <Route path="/" element={<MainColor />} /> }
                    {subdomain === "hoodie" && <Route path="/" element={<MainHoodie />} /> }
                    {subdomain === "suit" && <Route path="/" element={<SuitManMain />} /> }
                    {subdomain === "suitt" && <Route path="/" element={<SuitWomanMain />} /> }
                    {subdomain === "custom" && <Route path="/" element={<MainCustom />} /> }

                    {/* Fallback for path-based routing */}
                    <Route path="/lamp" element={<MainLamp />} />
                    <Route path="/knife" element={<MainKnife/>} />
                    <Route path="/rubber" element={<MainRubber/>} /> 
                    <Route path="/goose" element={<MainGoose/>} /> 
                    <Route path="/color" element={<MainColor/>} /> 
                    <Route path="/hoodie" element={<MainHoodie/>} /> 
                    <Route path="/suit" element={<SuitManMain/>} /> 
                    <Route path="/suitt" element={<SuitWomanMain/>} /> 


                    <Route path="/custom" element={<MainCustom/>} /> 
                </Routes>
            </Router>
		</div>
	);
};
