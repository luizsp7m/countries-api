import React, { useContext, useEffect, useState } from 'react';

import { Container, Wrapper } from './styles';

import { FilterContext } from '../../contexts/FilterContext';

import { AiOutlineSearch } from 'react-icons/ai';

function Filter() {
  const regions = ['All Regions', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const [name, setName] = useState('');
  const [region, setRegion] = useState('All Regions');

  const params = { name, region };

  const { loadCountriesByFilter } = useContext(FilterContext);

  return (
    <Container>
      <Wrapper>
        <div className="input-group">
          <input
            type="text"
            placeholder="Search for a country..."
            onChange={e => setName(e.target.value)}
          />

          <button onClick={() => loadCountriesByFilter(params)}>
            <AiOutlineSearch className="icon" />
          </button>
        </div>

        <select onChange={e => setRegion(e.target.value)}>
          {regions.map(region => (
            <option key={region}>{region}</option>
          ))}
        </select>
      </Wrapper>
    </Container>
  );
}

export default Filter;