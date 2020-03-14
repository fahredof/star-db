import React from "react";
import {withRouter} from "react-router-dom";
import {PersonList} from "../SWComponents/List";
import {PersonDetails} from "../SWComponents/Details";
import Row from "../Row";

const PeoplePage = ({history, match}) => {
    const {id} = match.params;
    
    return (
        <Row
            LeftRow={<PersonList onItemSelected={(id) => history.push(id)}/>}
            RightRow={<PersonDetails itemId={id}/>}
        />
    );
};

export default withRouter(PeoplePage);