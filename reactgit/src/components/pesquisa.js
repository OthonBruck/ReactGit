import React from "react";
import { Grid, Input, Button } from "semantic-ui-react";

function Pesquisa(props) {
  //const { query, repositories, updateQuery, addRepository } = props;
  const { texto, addRepository, updateTexto } = props;
  return (
    <Grid centered className="search-component">
      <Grid.Row columns={3} verticalAlign="middle" className="search-header">
        <Grid.Column width={2}>
          <img
            alt="Logo do Github"
            src="https://img.icons8.com/ios-glyphs/60/000000/github.png"
          ></img>
        </Grid.Column>
        <Grid.Column width={8}>Repositórios</Grid.Column>
        <Grid.Column width={4} textAlign="right">
          0
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
