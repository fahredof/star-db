import React, {Component} from "react";
import "./App.css";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";

import {PersonList,
        PlanetList,
        StarshipList} from "../SWComponents/List";

import {PersonDetails,
        PlanetDetails,
        StarshipDetails} from "../SWComponents/Details"

import Row from "../Row";
import ErrorIndicator from "../ErrorIndicator";

import SwapiService from "../../services/SwapiService";
import {SwapiServiceProvider} from "../SwapiServiceContext";

export default class App extends Component {
    swapiService = new SwapiService();

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
                <SwapiServiceProvider value={this.swapiService}>
                    <Header/>
                    <RandomPlanet/>
                    <Row
                        LeftRow={<PersonList/>}
                        RightRow={<PersonDetails/>}
                    />
                    <Row
                        LeftRow={<PlanetList/>}
                        RightRow={<PlanetDetails/>}
                    />
                    <Row
                        LeftRow={<StarshipList/>}
                        RightRow={<StarshipDetails/>}
                    />
                </SwapiServiceProvider>
            </div>
        );
    }
};