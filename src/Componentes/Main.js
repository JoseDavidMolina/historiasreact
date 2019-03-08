import React from "react";
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
    return (
      <div className="d-flex justify-content-center ">
        {this.renderHistoria(preguntas[this.state.pregunta].end)}
      </div>
    );
  }

  cambiar() {
    //console.log(preguntaACambiar);
    this.setState({ pregunta: localStorage.getItem("sesion") });
  }

  renderHistoria(comprobarFinal) {
    if (comprobarFinal === false) {
      return (
        <Historia
          datosHistoria={preguntas[this.state.pregunta]}
          finalOcultado="hidden"
          pregunta={() => this.cambiar()}
        />
      );
    } else {
      return (
        <Historia
          datosHistoria={preguntas[this.state.pregunta]}
          ocultado="hidden"
          pregunta={() => this.cambiar()}
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
