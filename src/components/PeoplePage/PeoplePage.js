import React, {Component} from "react";
import "./PeoplePage.css";

import ItemDetails from "../ItemDetails";
import {Record} from "../ItemDetails/ItemDetails";
import Row from "../Row";
import {PersonList} from "../SWComponents/index";
import ErrorBoundary from "../ErrorBoundary";

export default class PeoplePage extends Component {

    state = {
        selectedPerson: null,
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    render() {

        const itemList = (
            <PersonList
                onItemSelected={this.onPersonSelected}
                renderItems={(i) => (`${i.name} (${i.birthYear})`)}
            />
        );

        const personDetails = (
            <ErrorBoundary>
                <ItemDetails>
                    <Record field="gender" label="Gender"/>
                </ItemDetails>
            </ErrorBoundary>
        );

    }
}