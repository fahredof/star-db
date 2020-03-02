import React from "react";
import "./RandomPlanet.css";

import planet from "./img/planet.png";

const RandomPlanet = () => {
    return (
        <div className="random-planet jumbotron rounded">

            <img className="planet-image" src={planet} alt="planet"/>

            <div className="flex-column">
                <h3 className="planet-name">Planet Name</h3>

                <ul className="list-group-flush">
                    <li className="list-group-item d-flex">
                        <span className="term">Population</span>
                        <span className="term">Population</span>
                    </li>

                    <li className="list-group-item d-flex">
                        <span className="term">Rotation Period</span>
                        <span className="term">Rotation Period</span>
                    </li>

                    <li className="list-group-item d-flex">
                        <span className="term">Diameter</span>
                        <span className="term">Diameter</span>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default RandomPlanet;