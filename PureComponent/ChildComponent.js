import React, { Component, PureComponent } from "react";

export default class ChildComponent extends PureComponent {
  //Đây là lifecycle của pureComponent
  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log("nextProps", nextProps);
  //     console.log("nextProps", nextState);
  //     console.log("props", this.props.user);
  //     if (nextProps.user.name != this.props.user.name) {
  //       return true;
  //     }
  //     return false;
  //   }
  render() {
    console.log(1);
    return (
      <div>
        <h1>{this.props.user.name}</h1>
        <nav className="nav bg-dark text-white justify-content-center">
          <a className="nav-link active" href="#">
            Active link
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
          <a className="nav-link disabled" href="#">
            Disabled link
          </a>
        </nav>
      </div>
    );
  }
}
