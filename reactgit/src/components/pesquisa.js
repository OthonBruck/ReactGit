import React from "react";
import { Grid, Input, Button } from "semantic-ui-react";
import logo from "../images/logo.svg";

function Pesquisa(props) {
  const { texto, repositories, addRepository, updateTexto } = props;
  return (
    <Grid centered className="search-component">
      <Grid.Row columns={3} verticalAlign="middle" className="search-header">
        <Grid.Column width={2}>
          <img alt="Logo" src={logo}></img>
        </Grid.Column>
        <Grid.Column width={8}>Repositórios</Grid.Column>
        <Grid.Column width={4} textAlign="right">
          {repositories.length}
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={2}>
        <Grid.Column width={12}>
          <Input
            focus
            className="search-bar"
            type="text"
            value={texto}
            onChange={(evt) => updateTexto(evt.target.value)}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button className="search-button" onClick={addRepository}>
            ADD
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Pesquisa;
