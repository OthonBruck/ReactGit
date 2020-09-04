import React, { Component } from "react";
import Pesquisa from "./components/pesquisa";
import "./pesquisa.css";
import api from "./services/api";

import Header from "./components/header";

class App extends Component {
  state = {
    texto: "",
    repositories: [],
  };

  updateTexto = (texto) => {
    this.setState({ texto });
  };

  addRepository = async () => {
    const response = await api.get(`/repos/${this.state.texto}`);
    console.log(response);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Pesquisa
          query={this.state.texto}
          updateTexto={this.updateTexto}
          addRepository={this.addRepository}
        />
      </div>
    );
  }
}

export default App;
