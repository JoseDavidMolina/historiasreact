import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "reactstrap";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar id="header" className="sticky-top bg-secondary">
          <div className="container">
            <img className="App-logo" src={logo} width="70" height="70" />
            <h3 className="text-white text-center"> Historias React </h3>
          </div>
        </Navbar>
        <div className="history-board">
          <Main />
        </div>
        <Navbar id="footer" className="fixed-bottom bg-secondary">
          <div className="container">
            <h3 className="text-white text-center">José David Molina Flor</h3>
            <h3 className="text-white text-center">2º DAW</h3>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
