import React, {Component} from "react";
import "./PeoplePage.css";

import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import ErrorIndicator from "../ErrorIndicator";

export default class PeoplePage extends Component {
    state = {
        selectedPerson: null,
        hasError: false
    };

    componentDidCatch() {
        this.setState({hasError: true})
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    render() {
        const {selectedPerson, hasError} = this.state;

        if (hasError) {
            return <ErrorIndicator/>;
        }

        return (
            <div className="row mb-2">
                <div className="col-xl-6">
                    <ItemList onItemSelected={this.onPersonSelected}/>
                </div>

                <div className="col-xl-6 ">
                    <PersonDetails personId={selectedPerson}/>
                </div>
            </div>
        );
    }
}