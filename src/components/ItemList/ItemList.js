import React from "react";
import "./ItemList.css";

const ItemList = () => {
    return (
        <div className="item-list rounded jumbotron">
            <ul className="list-group">
                <li className="list-group-item">
                    <span className="term">Luke Skywalker</span>
                </li>

                <li className="list-group-item">
                    <span className="term">R2 D1</span>
                </li>

                <li className="list-group-item">
                    <span className="term">Darth Vader</span>
                </li>
            </ul>
        </div>
    );
};

export default ItemList;