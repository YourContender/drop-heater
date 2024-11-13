import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./projects/home/Home";
import { MainGlobe} from "./projects/globe-project/MainGlobe.jsx";
import { MainLamp } from "./projects/lamp-project/MainLamp.jsx";
import { MainCosmos } from "./projects/cosmos-project/MainCosmos.jsx";
import "./index.css";

export const App = () => {
    const hostname = window.location.hostname;
    const [subdomain] = hostname.split(".");

	return (
		<div>
			<Router>
                <Routes>
                    {/* Subdomain routing with nested routes */}
                    {subdomain === "lamp" && <Route path="*" element={<MainLamp />} /> }
                    {subdomain === "globe" && <Route path="*" element={<MainGlobe />} /> }
                    {subdomain === "cosmos" && <Route path="*" element={<MainCosmos />} /> }

                    {/* Fallback for path-based routing */}
                    <Route path="/lamp" element={<MainLamp />} />
                    <Route path="/globe" element={<MainGlobe />} />
                    <Route path="/cosmos" element={<MainCosmos />} />

                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
		</div>
	);
};
