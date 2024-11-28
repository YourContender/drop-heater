import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./projects/home/Home";
import { MainLamp } from "./projects/lamp-project/MainLamp.jsx";
import { MainKnife } from "./projects/knife-project/MainKnife.jsx";
import { MainRubber } from "./projects/rubber-project/MainRubber.jsx";
import { MainGoose } from "./projects/goose-project/MainGoose.jsx";
import "./index.css";

export const App = () => {
	return (
		<div>
			<Router>
                {/* <Home/> */}

                <Routes>
                    {/* <Route path="/" element={<Home />}/> */}
                    <Route path="/lamp" element={<MainLamp />} />
                    <Route path="/knife" element={<MainKnife/>} />
                    <Route path="/rubber" element={<MainRubber/>} /> 
                    <Route path="/goose" element={<MainGoose/>} /> 
                </Routes>
            </Router>
		</div>
	);
};