import React, {Component} from "react";
import {StarshipList} from "../SWComponents/List";
import {StarshipDetails} from "../SWComponents/Details";
import Row from "../Row";

export default class StarshipsPage extends Component {
    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    };

    render() {
        return (
            <Row
                LeftRow={<StarshipList onItemSelected={this.onItemSelected}/>}
                RightRow={<StarshipDetails itemId={this.state.selectedItem}/>}
            />
        );
    }
};