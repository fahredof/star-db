import React from "react";
import "./App.css";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";

const App = () => {
    return (
        <div className="app">
            <Header/>
            <RandomPlanet/>

            <div className="row mb-2">
                <div className="col-xl-6">
                    <ItemList/>
                </div>

                <div className="col-xl-6 ">
                    <PersonDetails/>
                </div>
            </div>

        </div>
    );
};

export default App;