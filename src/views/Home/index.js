import React, { useState, useEffect, useContext } from 'react';

import { Container, Content } from './styles';

import Header from '../../components/Header';
import Filter from '../../components/Filter';
import Card from '../../components/Card';

import api from '../../services/api';

import { FilterContext } from '../../contexts/FilterContext';
import { Link } from 'react-router-dom';

function Home() {
  const { region, name } = useContext(FilterContext);

  const [countries, setCountries] = useState();

  async function loadCountries() {
    // // https://restcountries.eu/rest/v2/
    // // https://restcountries.eu/rest/v2/region/europe
    // await api.get(
    //   region === 'all' ? 'all' : `region/${region}`
    // ).then(response => {
    //   setCountries(response.data);
    // });

    if (!name && !region) {
      await api.get(`all`).then(response => {
        setCountries(response.data);
      });
    }

    if (name && !region) {
      await api.get(`name/${name}`).then(response => {
        setCountries(response.data);
      });
    }

    if (!name && region) {
      await api.get(`region/${region}`).then(response => {
        setCountries(response.data);
      });
    }

    // if(name && region) {
    //   await api.get(`name/${name}`).then(response => {
    //     const temporary = [];
    //     response.data.map(country => {
    //       if(country.region === region)
    //         temporary.push(country);
    //     })
    //     setCountries(temporary);
    //   });
    // }
  }

  useEffect(() => {
    loadCountries();
    console.log(name);
  }, [region, name]);

  if (!countries) return <h1>Carregando</h1>

  return (
    <Container>
      <Header />
      <Filter />
      <Content>
        {countries.map((country, index) => (
          <Link to={`/${country.alpha3Code}`}>
            <Card data={country} key={index} />
          </Link>
        ))}
      </Content>
    </Container>
  );
}

export default Home;