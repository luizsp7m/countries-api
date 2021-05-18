import React, { useState, useEffect, useContext } from 'react';

import { Container, Content } from './styles';

import Header from '../../components/Header';
import Filter from '../../components/Filter';
import Card from '../../components/Card';

import api from '../../services/api';

import { Link } from 'react-router-dom';

import { FilterContext } from '../../contexts/FilterContext';

function Home() {
  const { loading, countries } = useContext(FilterContext);

  return (
    <Container>
      <Header />
      <Filter />
      <Content>
        {loading ? <h1 className="loading">Loading...</h1> : countries.map((country, index) => (
          <Link to={`/${country.alpha3Code}`} key={index}>
            <Card data={country} />
          </Link>
        ))}
      </Content>
    </Container >
  );
}

export default Home;