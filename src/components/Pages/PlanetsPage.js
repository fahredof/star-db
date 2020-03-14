import React from "react";
import {withRouter} from "react-router-dom";
import {PlanetList} from "../SWComponents/List";
import {PlanetDetails} from "../SWComponents/Details";
import Row from "../Row";

const PlanetsPage = ({history, match}) => {
    const {id} = match.params;

    return (
        <Row
            LeftRow={<PlanetList onItemSelected={(id) => history.push(id)}/>}
            RightRow={<PlanetDetails itemId={id}/>}
        />
    );
};

export default withRouter(PlanetsPage);