import React from "react";

const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;
    return (
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                 alt="planet"
            />
            <div className="flex-column">
                <h3 className="planet-name">{name}</h3>
                <ul className="list-group-flush">
                    <li className="list-group-item d-flex">
                        <span className="term">Population</span>
                        <span className="term">{population}</span>
                    </li>
                    <li className="list-group-item d-flex">
                        <span className="term">Rotation Period</span>
                        <span className="term">{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item d-flex">
                        <span className="term">Diameter</span>
                        <span className="term">{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};

export default PlanetView;