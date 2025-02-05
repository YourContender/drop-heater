import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./projects/home/Home";
import "./index.css";
import { CustomDesignSite } from "./projects/CustomDesignSite.jsx";

export const App = () => {
    const hostname = window.location.hostname;
    const [subdomain] = hostname.split(".");
    console.log(window.location.hostname, subdomain);

	return (
		<div>
			<Router>
                <Routes>
                    {/* Subdomain routing with nested routes */}
                    {subdomain === "suit" && <Route path="/" element={<CustomDesignSite />} /> }

                    <Route path="/suit" element={<CustomDesignSite/>} /> 
                </Routes>
            </Router>
		</div>
	);
};
