import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Button extends Component {
  render() {
    <button
      className="btn-danger rounded-pill mr-3"
      id={this.props.idHistoria}
      onClick={() => this.props.cambioPregunta()}
    >
      {this.props.respuesta}
    </button>;
  }
}

export default Button;
