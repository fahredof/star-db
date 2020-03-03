import React, {Component} from "react";

export default class ErrorButton extends Component {
    state = {
        error: false
    };

    render() {
        if (this.state.error) {
            this.foo.bar = 0;
        }

        return (
          <div>
              <button
                onClick={() => this.setState({error: true})}
              >
                  Click
              </button>
          </div>
        );
    }
}