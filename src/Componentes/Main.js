import React, { Component } from "react";
import preguntas from "./datos.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Historia from "./Historia.js";

if (localStorage.getItem("sesion") != null) {
  var preguntaSesion = 0;
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
    console.log(preguntas[this.state.pregunta].end);
    return (
      <div className="d-flex justify-content-center ">
        {this.renderHistoria(preguntas[this.state.pregunta].end)}
      </div>
    );
  }

  renderHistoria(comprobarFinal) {
    if (comprobarFinal === false) {
      return (
        <Historia
          datosHistoria={preguntas[this.state.pregunta]}
          finalOcultado="hidden"
        />
      );
    } else {
      return (
        <Historia
          datosHistoria={preguntas[this.state.pregunta]}
          ocultado="hidden"
        />
      );
    }
  }

  reiniciar() {
    localStorage.setItem("sesion", 0);
    this.setState({ pregunta: 0 });
  }
}

export default Main;
