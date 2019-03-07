import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "./Button.js";

class Historia extends React.Component {
  cambioPregunta(z) {
    this.setState({ pregunta: z });
    localStorage.setItem("sesion", z);
  }

  volver() {
    localStorage.setItem("sesion", 0);
    this.setState({ pregunta: 0 });
  }

  render() {
    return (
      <div id="pregunta" className="p-4 col-8 border-dark bg-warning">
        <h3>{this.props.datosHistoria.title}</h3>
        <div hidden={this.props.ocultado}>
          <Button
            id={this.props.datosHistoria.idAnswer1}
            respuesta={this.props.datosHistoria.answer1}
          />
          <Button
            id={this.props.datosHistoria.idAnswer2}
            respuesta={this.props.datosHistoria.answer2}
          />
          <Button
            id={this.props.datosHistoria.idAnswer3}
            respuesta={this.props.datosHistoria.answer3}
          />
        </div>

        <div hidden={this.props.finalOcultado}>
          <Button onClick={() => this.props.volver()} />
        </div>
      </div>
    );
  }
}

export default Historia;
