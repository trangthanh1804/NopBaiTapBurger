import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class PureComponent extends Component {
  state = {
    number: 1,
    user: { id: 1, name: "Thanh" },
  };

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <br />
        <button
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>
        <h3>Name: {this.state.user.name}</h3>
        <button
          onClick={() => {
            let newUser = this.state.user;
            newUser.name = "Nguyễn Văn A";
            this.setState({ user: {...newUser} });
          }}
        >
          set Name
        </button>
        <ChildComponent user={this.state.user} />
      </div>
    );
  }
}
