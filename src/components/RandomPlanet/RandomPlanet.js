import React, {Component} from "react";
import "./RandomPlanet.css";
import SwapiService from "../../services/SwapiService";
import Spinner from "../Spinner";
import PlanetView from "./PlanetView";
import ErrorIndicator from "../ErrorIndicator";
import PropTypes from "prop-types";

export default class RandomPlanet extends Component {
    static defaultProps = {
        updateInterval: 200000
    };

    static propTypes = {
        updateInterval: PropTypes.number
    };

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        const {updateInterval} = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    /*componentWillUnmount() {
        clearInterval(this.interval);
    }*/

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        })
    };

    onError = (err) => {
        return this.setState({
            error: true,
            loading: false,
        })
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 17) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    render() {
        const {planet, loading, error} = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}



