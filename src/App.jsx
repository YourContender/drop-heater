import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./projects/home/Home";
import "./index.css";
import { MainGlobe } from "./projects/globe/MainGlobe";
import { MainLamp } from "./projects/lamp/MainLamp.jsx";
import { MainCosmos } from "./projects/cosmos/MainCosmos.jsx";

export const App = () => {
	return (
		<div>
			<Router>
                {/* <Home/> */}

                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/lamp" element={<MainLamp />} />
                    <Route path="/globe" element={<MainGlobe/>} />
                    <Route path="/cosmos" element={<MainCosmos/>} />
                </Routes>
            </Router>
		</div>
	);
};
