import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./projects/home/Home";
import "./index.css";
import { MainGlobe } from "./projects/globe/MainGlobe";
import { MainLamp } from "./projects/lamp/MainLamp.jsx";

const HomePage = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

export const App = () => {
	return (
		<div>
			<Router>
                {/* <Home/> */}

                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/lamp" element={<MainLamp />} />
                    <Route path="/globe" element={<MainGlobe/>} />
                </Routes>
            </Router>
		</div>
	);
};
