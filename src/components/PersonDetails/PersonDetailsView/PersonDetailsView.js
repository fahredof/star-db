import React, {Fragment} from "react";

const PersonDetailsView = ({person}) => {
    const {id, name, gender, birthYear, eyeColor} = person;

    return (
        <Fragment>
            <div className="person-details jumbotron rounded">
                <img className="person-image"
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                     alt="person"
                />
                <div className="flex-column">
                    <h3 className="planet-name">{name}</h3>
                    <ul className="list-group-flush">
                        <li className="list-group-item">
                            {`Gender: ${gender}`}
                        </li>
                        <li className="list-group-item">
                            {`Birth Year: ${birthYear}`}
                        </li>
                        <li className="list-group-item">
                            {`Eye Color: ${eyeColor}`}
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default PersonDetailsView;