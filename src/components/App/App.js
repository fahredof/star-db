import React, {Component} from "react";
import "./App.css";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";

import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage,
    LoginPage,
    SecretPage
} from "../Pages";

import ErrorIndicator from "../ErrorIndicator";
import SwapiService from "../../services/SwapiService";
import {SwapiServiceProvider} from "../SwapiServiceContext";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import StarshipDetails from "../SWComponents/Details/StarshipDetails";

export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        hasError: false,
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({isLoggedIn: true});
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
                    <Router>
                        <Header/>
                        <RandomPlanet/>
                        <Switch>
                            <Route path="/"
                                   exact
                                   render={() => {
                                       return (
                                           <div className="jumbotron text-center">
                                               <h3>Welcome to Star DB</h3>
                                           </div>
                                       )
                                   }}
                            />
                            <Route path="/people/:id?" component={PeoplePage}/>
                            <Route path="/planets/:id?" component={PlanetsPage}/>
                            <Route path="/starships" exact component={StarshipsPage}/>
                            <Route path="/starships/:id"
                                   render={({match}) => {
                                       const {id} = match.params;
                                       return <StarshipDetails itemId={id}/>;
                                   }}
                            />
                            <Route path="/login" render={() => (
                                <LoginPage
                                    isLoggedIn={this.state.isLoggedIn}
                                    onLogin={this.onLogin}
                                />
                            )}/>

                            <Route path="/secret" render={() => (
                                <SecretPage isLoggedIn={this.state.isLoggedIn}/>
                            )}/>

                            <Route render={() => {
                                return (
                                    <div className="jumbotron text-center">
                                        <p>Page Not Found ;(</p>
                                    </div>
                                );
                            }}/>

                        </Switch>
                    </Router>
                </SwapiServiceProvider>

            </div>
        );
    }
};