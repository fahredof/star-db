import React, {Component} from "react";
import {PersonList} from "../SWComponents/List";
import {PersonDetails} from "../SWComponents/Details";
import Row from "../Row";

export default class PeoplePage extends Component {
    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    };

    render() {
        return (
            <Row
                LeftRow={<PersonList onItemSelected={this.onItemSelected}/>}
                RightRow={<PersonDetails itemId={this.state.selectedItem}/>}
            />
        );
    }
};