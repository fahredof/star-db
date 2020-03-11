import React from "react";
import "./ItemList.css";

const ItemList = (props) => {
    const {data, onItemSelected, children: renderItems} = props;

    const renderList = (data) => {
        return data.map((item) => {
            const {id} = item;
            const label = renderItems(item);

            return (
                <li
                    className="list-group-item"
                    key={id}
                    onClick={() => onItemSelected(id)}
                >
                    {label}
                </li>
            );
        });
    };

    const element = renderList(data);

    return (
        <div className="item-list rounded jumbotron">
            {element}
        </div>
    );
};

export default ItemList;



