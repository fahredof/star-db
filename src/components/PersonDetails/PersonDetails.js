import React, {Component, Fragment} from "react";
import "./PersonDetails.css";

import SwapiService from "../../services/SwapiService";

import PersonDetailsView from "./PersonDetailsView/PersonDetailsView";
import Spinner from "../Spinner";

export default class PersonDetails extends Component {
    swapiService = new SwapiService();

    state = {
        person: null,
        loading: false,
        attention: true
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const {personId} = this.props;

        if (!personId) {
            return;
        }

        this.setState({
            loading: true,
            attention: false
        });

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({
                    person,
                    loading: false,
                    attention: false
                });
            })
    }

    render() {
        const {person, loading, attention} = this.state;

        const welcomeText = (
            <div className="attention-block jumbotron rounded">
                        <span>
                            Select the person from the list!
                        </span>
            </div>
        );

        const hasData = !(loading || attention);

        const selectText = attention ? welcomeText : null;
        const spinner = loading ? <div className="jumbotron rounded"><Spinner/></div> : null;
        const content = hasData ? <PersonDetailsView person={person}/> : null;

        return (
            <Fragment>
                {selectText}
                {spinner}
                {content}
            </Fragment>
        );
    }
};