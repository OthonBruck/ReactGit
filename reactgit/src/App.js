import React, { Component } from "react";
import Pesquisa from "./components/pesquisa";
import "./pesquisa.css";
import api from "./services/api";
import Lista from "./components/lista";

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
    try {
      const response = await api.get(`/repos/${this.state.texto}`);
      const {
        id,
        owner: { avatar_url, login },
        name,
        stargazers_count,
        language,
        forks,
        url,
      } = response.data;
      let repo = {
        id,
        owner: { avatar_url, login },
        name,
        stargazers_count,
        language,
        forks,
      };

      let found = this.state.repositories.find((r) => r.id === repo.id);
      if (found !== undefined) {
        return alert("Dados já inseridos");
      }

      this.setState((currentState) => ({
        repositories: currentState.repositories.concat({
          id,
          avatar_url,
          login,
          name,
          stargazers_count,
          language,
          forks,
          url,
        }),
      }));
    } catch (error) {
      alert("Dados inseridos incorretamente");
    }
  };

  removeRepository = (repository) => {
    this.setState((currentState) => ({
      repositories: currentState.repositories.filter((r) => {
        return r.id !== repository.id;
      }),
    }));
  };

  updateRepository = async (repo) => {
    const resp = await api.get(`/repos/${repo.login}/${repo.name}`);

    console.log("OLD", repo);
    console.log(repo.login);

    const {
      id,
      owner: { avatar_url, login },
      name,
      stargazers_count,
      language,
      forks,
      fullName,
    } = resp.data;
    repo = {
      id,
      avatar_url,
      login,
      name,
      stargazers_count,
      language,
      forks,
      fullName,
    };

    console.log("NEW", repo);

    let newRepositories = this.state.repositories.map((r) =>
      r.id === repo.id ? repo : r
    );

    this.setState({ repositories: newRepositories });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Pesquisa
          query={this.state.texto}
          repositories={this.state.repositories}
          updateTexto={this.updateTexto}
          addRepository={this.addRepository}
        />
        <Lista
          repositories={this.state.repositories}
          removeRepository={this.removeRepository}
          updateRepository={this.updateRepository}
        />
      </div>
    );
  }
}

export default App;
