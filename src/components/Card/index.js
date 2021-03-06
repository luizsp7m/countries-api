import React from 'react';

import { Container } from './styles';

function Card({ data }) {
  return (
    <Container>
      <div className="flag-image">
        <img src={data.flags.svg} alt={data.name.common} />
      </div>

      <div className="information">
        <h1>{data.name.common}</h1>
        
        <span>
          <b>Population: </b> { data.population ? data.population.toLocaleString('pt-BR') : '-' } 
        </span>

        <span>
          <b>Region: </b> { data.region ? data.region : '-' }
        </span>

        <span>
          <b>Capital: </b> { data.capital ? data.capital : '-' }
        </span>
      </div>
    </Container>
  );
}

export default Card;