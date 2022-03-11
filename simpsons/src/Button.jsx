import React, { Component } from "react";
// import Label from './Label';

class Button extends Component {
  state = {};

  render() {
    return (
      <>
        <button
          className="button"
          onClick={() => this.props.updateLike("like")}
        >
          Like
        </button>
        <button
          className="button"
          onClick={() => this.props.updateLike("dislike")}
        >
          Dislike
        </button>
      </>
    );
  }
}
/* /* <Label names = {this.props.names}/> */
export default Button;
