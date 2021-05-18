import React from 'react';

import { Container } from './styles';

function Card({ data }) {
  return (
    <Container>
      <div className="flag-image">
        <img src={data.flag} alt={data.name} />
      </div>

      <div className="information">
        <h1>{data.name}</h1>
        
        <span>
          <b>Population: </b> {data.population.toLocaleString('pt-BR')}
        </span>

        <span>
          <b>Region: </b> {data.region}
        </span>

        <span>
          <b>Capital: </b> {data.capital}
        </span>
      </div>
    </Container>
  );
}

export default Card;