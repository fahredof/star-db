import React, {Component} from "react";
import "./ItemList.css";

import SwapiService from "../../services/SwapiService";

import Spinner from "../Spinner";

export default class ItemList extends Component {
    swapiService = new SwapiService();

    state = {
        peopleList: null
    };

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({peopleList});
            });
    }

    renderItems(peopleList) {
        return peopleList.map(({id, name}) => {
            return (
                <li
                    className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                >
                    {name}
                </li>
            );
        });
    };

    render() {
        const {peopleList} = this.state;

        if (!peopleList) {
            return <Spinner/>
        }

        const element = this.renderItems(peopleList);

        return (
            <div className="item-list rounded jumbotron">
                {element}
            </div>
        );
    }
};