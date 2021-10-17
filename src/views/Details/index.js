import React, { Fragment, useEffect, useState } from 'react';

import { Link, Redirect } from 'react-router-dom';

import { Container, Content, Grid, Image, About } from './styles';

import Header from '../../components/Header';

import { BsArrowLeft } from 'react-icons/bs'

import api from '../../services/api';

function Details({ match }) {
  const [country, setCountry] = useState();
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);

  const [currencies, setCurrencies] = useState([]);
  const [languages, setLanguages] = useState([]);

  async function loadDetails() {
    setLoading(true);
    await api.get(`/alpha/${match.params.code}`).then(response => {
      setCountry(response.data[0]);
      setLoading(false);
    }).catch(err => {
      setRedirect(true);
    });
  }

  useEffect(() => {
    loadDetails();
  }, [match.params.code]);

  useEffect(() => {
    if(!loading) {
      const arrayCurrencies = new Array();
      const arrayLanguages = new Array();

      for(let id in country.currencies) {
        arrayCurrencies.push({ id, ...country.currencies[id] });
      }

      for(let id in country.languages) {
        arrayLanguages.push({
          id,
          name: country.languages[id]
        });
      }

      setCurrencies(arrayCurrencies);
      setLanguages(arrayLanguages);
    }
  }, [loading]);

  return (
    <Fragment>
      { redirect && <Redirect to={'/'} /> }
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
                <img src={country.flags.svg} alt="Flag" />
              </Image>

              <About>
                <div className="country-name">{country.name.common}</div>

                <div className="card-container">
                  <div className="card-body">
                    <div className="card-text">
                      <span>Native Name: </span> <label>{country.name.official}</label>
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
                    {/* <div className="card-text">
                      <span>Top Level Domain: </span> <label>{country.topLevelDomain}</label>
                    </div> */}

                    <div className="card-text">
                      <span>Currencies: </span> { currencies.map(currence => (
                        <label key={currence.id}>{currence.name} </label>
                      )) }
                    </div>

                    <div className="card-text">
                      <span>Languages: </span> {languages.map((language, index) => (
                        <label key={language.id}>{language.name} {index < languages.length - 1 && '/ '}</label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-countries">
                  <h5>Border Countries: </h5>

                  <div className="countries-list">
                    { country.borders && country.borders.map(border => (
                      <Link to={`/${border}`} key={border}>{border}</Link>
                    ))}
                  </div>
                </div>
              </About>
            </Grid>
          )}
        </Content>
      </Container>
    </Fragment>
  );
}

export default Details;