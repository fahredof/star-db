import React, {Component} from "react";
import "./App.css";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import PeoplePage from "../PeoplePage";
import ErrorIndicator from "../ErrorIndicator";

export default class App extends Component {
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <ErrorIndicator/>
                </div>
            );
        }

        return (
            <div className="app">
                <Header/>
                <RandomPlanet/>
                <PeoplePage/>
            </div>
        );
    }
};