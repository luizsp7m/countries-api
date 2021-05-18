import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Container, Content, Grid, Image, About } from './styles';

import Header from '../../components/Header';

import { BsArrowLeft } from 'react-icons/bs'

import api from '../../services/api';

function Details({ match }) {
  const [country, setCountry] = useState();
  const [loading, setLoading] = useState(true);

  async function loadDetails() {
    setLoading(true);
    await api.get(`/alpha/${match.params.code}`).then(response => {
      setCountry(response.data);
      setLoading(false);
    });
  }

  useEffect(() => {
    loadDetails();
  }, [match.params.code]);

  return (
    <Container>
      <Header />

      <Content>
        <Link to={'/'}>
          <BsArrowLeft className="icon" />
          <span>Back</span>
        </Link>

        {loading ? <h1 className="loading">Loading...</h1> : (
          <Grid>
            <Image>
              <img src={country.flag} alt="Flag" />
            </Image>

            <About>
              <div className="country-name">{country.name}</div>

              <div className="card-container">
                <div className="card-body">
                  <div className="card-text">
                    <span>Native Name: </span> <label>{country.nativeName}</label>
                  </div>

                  <div className="card-text">
                    <span>Population: </span> <label>{country.population.toLocaleString('pt-BR')}</label>
                  </div>

                  <div className="card-text">
                    <span>Region: </span> <label>{country.region}</label>
                  </div>

                  <div className="card-text">
                    <span>Sub Region: </span> <label>{country.subregion}</label>
                  </div>

                  <div className="card-text">
                    <span>Capital: </span> <label>{country.capital}</label>
                  </div>
                </div>

                <div className="card-body">
                  <div className="card-text">
                    <span>Top Level Domain: </span> <label>{country.topLevelDomain}</label>
                  </div>

                  <div className="card-text">
                    <span>Currencies: </span> {country.currencies.map(currence => (
                      <label key={currence.code}>{currence.name}</label>
                    ))}
                  </div>

                  <div className="card-text">
                    <span>Languages: </span> {country.languages.map(language => (
                      <label key={language.iso639_1}>{language.name}</label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-countries">
                <h5>Border Countries: </h5>

                <div className="countries-list">
                  {country.borders.map(border => (
                    <Link to={`/${border}`} key={border}>{border}</Link>
                  ))}
                </div>
              </div>
            </About>
          </Grid>
        )}
      </Content>
    </Container>
  );
}

export default Details;