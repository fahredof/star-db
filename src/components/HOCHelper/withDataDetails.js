import React, {Component} from "react";

const withDataDetails = (View, itemId) => {

    return class extends Component {
        state = {
            item: null,
            image: null,
            loading: false,
            attention: true
        };

        componentDidMount() {
            this.updateItem();
        }

        componentDidUpdate(prevProps) {
            if (this.props.itemId !== prevProps.itemId) {
                this.updateItem();
            }
        }

        updateItem() {
            const {getData, getImage} = this.props;
            if (!itemId) {
                return;
            }

            this.setState({
                loading: true,
                attention: false
            });

            getData(itemId)
                .then((item) => {
                    this.setState({
                        item,
                        loading: false,
                        attention: false
                    });

                    getImage(item)
                        .then((image) => {
                            this.setState({image});
                        })
                });
        }

        render() {
            const {item, image, loading, attention} = this.state;

            return (
                <View
                    {...this.props}
                    item={item}
                    image={image}
                    loading={loading}
                    attention={attention}
                />
            )
        }
    }
};

export default withDataDetails;

