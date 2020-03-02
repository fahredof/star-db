import React from "react";
import "./PersonDetails.css";
import person from "./img/r2d2.png"

const PersonDetails = () => {
    return (
        <div className="person-details jumbotron rounded">

            <img className="person-image" src={person} alt="person"/>

            <div className="flex-column">
                <h3 className="planet-name">R2-D2</h3>

                <ul className="list-group-flush">
                    <li className="list-group-item d-flex">
                        <span className="term">Gender</span>
                        <span className="term">Male</span>
                    </li>

                    <li className="list-group-item d-flex">
                        <span className="term">Birth Year</span>
                        <span className="term">43</span>
                    </li>

                    <li className="list-group-item d-flex">
                        <span className="term">Eye Color</span>
                        <span className="term">Red</span>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default PersonDetails;