import React from 'react';
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link className="project" to="/">Home</Link></li>
                    <li><Link className="project" to="/lamp">Lamp</Link></li>
                    <li><Link className="project" to="/globe">Globe</Link></li>
                    <li><Link className="project" to="/cosmos">Cosmos</Link></li>
                </ul>
            </nav>
        </div>
    )
}
