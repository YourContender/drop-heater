import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./projects/home/Home";
import { MainGlobe} from "./projects/globe-project/MainGlobe.jsx";
import { MainLamp } from "./projects/lamp-project/MainLamp.jsx";
import { MainCosmos } from "./projects/cosmos-project/MainCosmos.jsx";
import "./index.css";

export const App = () => {
	return (
		<div>
			<Router>
                {/* <Home/> */}

                <Routes>
                    {/* <Route path="/" element={<Home />}/> */}
                    <Route path="/lamp" element={<MainLamp />} />
                    <Route path="/globe" element={<MainGlobe/>} />
                    <Route path="/cosmos" element={<MainCosmos/>} /> 
                </Routes>
            </Router>
		</div>
	);
};