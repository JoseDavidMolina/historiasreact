import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Button.css";

class Button extends Component {
  render() {
    return (
      <button
        className="btn btn-dark"
        id={this.props.idHistoria}
        onClick={() => this.props.cambioPregunta()}
      >
        {this.props.respuesta}
      </button>
    );
  }
}

export default Button;
