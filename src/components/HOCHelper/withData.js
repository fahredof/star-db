import React, {Component} from "react";
import Spinner from "../Spinner";

const withData = (View) => {
    return class extends Component {
        state = {
            itemList: null
        };

        componentDidMount() {
            const {getData} = this.props;
            getData()
                .then((itemList) => {
                    this.setState({itemList});
                });
        }

        render() {
            const {itemList} = this.state;

            if (!itemList) {
                return <Spinner/>
            }

            return <View
                {...this.props}
                data={itemList}
            />
        }
    };
};

export default withData;