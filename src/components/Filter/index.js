import React, { useContext } from 'react';

import { Container, Wrapper } from './styles';

import { FilterContext } from '../../contexts/FilterContext';

function Filter() {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const { setRegion, setName } = useContext(FilterContext);

  return (
    <Container>
      <Wrapper>
        <input 
          type="text" 
          placeholder="Search for a country..." 
          onChange={e => setName(e.target.value)}
        />

        <select onChange={e => setRegion(e.target.value)}>
        {/* <option value="" selected disabled hidden>Filter by Region</option> */}

          { regions.map(region => (
            <option key={region}>{region}</option>
          )) }
        </select>
      </Wrapper>
    </Container>
  );
}

export default Filter;