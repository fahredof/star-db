import React, {Component} from "react";
import {PlanetList} from "../SWComponents/List";
import {PlanetDetails} from "../SWComponents/Details";
import Row from "../Row";

export default class PlanetsPage extends Component {
    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    };

    render() {
        return (
            <Row
                LeftRow={<PlanetList onItemSelected={this.onItemSelected}/>}
                RightRow={<PlanetDetails itemId={this.state.selectedItem}/>}
            />
        );
    }
};