import React, {Component, Fragment} from "react";
import "./ItemDetails.css";

import Spinner from "../Spinner";
import Attention from "./Attention";

class ItemDetails extends Component {

    render() {
        const {item, image, loading, attention, children} = this.props;
        const hasData = !(loading || attention);

        const selectText = attention ? <Attention/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? (
                <div className="person-details jumbotron rounded">
                    <img className="person-image"
                         src={image}
                         alt="item"
                    />
                    <div className="flex-column">
                        <h3 className="planet-name">{item.name}</h3>
                        <ul className="list-group-flush">
                            {React.Children.map(children, ((child) => {
                                return React.cloneElement(child, {item});
                            }))}
                        </ul>
                    </div>
                </div>
            )
            : null;

        return (
            <Fragment>
                {selectText}
                {spinner}
                {content}
            </Fragment>
        );
    }
}

export default ItemDetails;
