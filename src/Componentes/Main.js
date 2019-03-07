import React, { Component } from "react";
import preguntas from "./datos.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Historia from "./Historia.js";

var preguntaSesion = 0;

if (localStorage.getItem("sesion") != null) {
  preguntaSesion = localStorage.getItem("sesion");
} else {
  localStorage.setItem("sesion", 0);
}

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pregunta: preguntaSesion
    };
  }

  render() {
    return (
      <div className="justify-content-center">
        {this.renderHistoria(preguntas[this.state.pregunta].end)}
      </div>
    );
  }

  renderHistoria(comprobarFinal) {
    if (!comprobarFinal) {
      <Historia
        datosHistoria={preguntas[this.state.pregunta]}
        finalOcultado="hidden"
      />;
    } else {
      <Historia
        datosHistoria={preguntas[this.state.pregunta]}
        ocultado="hidden"
      />;
    }
  }

  reiniciar() {
    localStorage.setItem("sesion", 0);
    this.setState({ pregunta: 0 });
  }
}

export default Main;
