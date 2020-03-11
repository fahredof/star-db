import React, {Component} from "react";
import "./App.css";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import {PeoplePage, PlanetsPage, StarshipsPage} from "../Pages";
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
                    <RandomPlanet updateInterval={123456}/>
                    <PeoplePage/>
                    <PlanetsPage/>
                    <StarshipsPage/>
                </SwapiServiceProvider>
            </div>
        );
    }
};