import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "./Button.js";
import "./Historia.css";

class Historia extends React.Component {
  cambioPregunta(z) {
    console.log(z);
    localStorage.setItem("sesion", z);
    this.setState({ pregunta: z });
    location.reload();
  }

  volver() {
    this.setState({ pregunta: 0 });
    localStorage.setItem("sesion", 0);
    location.reload();
  }

  render() {
    return (
      <div id="pregunta" className="container bg-light border rounded-lg">
        <h3>{this.props.datosHistoria.title}</h3>
        <div hidden={this.props.ocultado}>
          <Button
            id={this.props.datosHistoria.idAnswer1}
            respuesta={this.props.datosHistoria.answer1}
            cambioPregunta={() =>
              this.cambioPregunta(this.props.datosHistoria.idAnswer1)
            }
          />
          <Button
            id={this.props.datosHistoria.idAnswer2}
            respuesta={this.props.datosHistoria.answer2}
            cambioPregunta={() =>
              this.cambioPregunta(this.props.datosHistoria.idAnswer2)
            }
          />
          <Button
            id={this.props.datosHistoria.idAnswer3}
            respuesta={this.props.datosHistoria.answer3}
            cambioPregunta={() =>
              this.cambioPregunta(this.props.datosHistoria.idAnswer3)
            }
          />
        </div>
        <div hidden={this.props.finalOcultado}>
          <Button
            id={20}
            respuesta={"Volver"}
            cambioPregunta={() => this.volver()}
          />
        </div>
      </div>
    );
  }
}

export default Historia;
