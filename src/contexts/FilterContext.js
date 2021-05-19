import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState();

  async function loadCountriesDefault() {
    setLoading(true);
    await api.get('/all').then(response => {
      setCountries(response.data);
      setLoading(false);
    });
  }

  async function loadCountriesByFilter({ name, region }) {
    if(!name && region) { // Todos os paises de determinada região
      setLoading(true);
      await api.get(region === 'All' ? '/all' : `/region/${region}`).then(response => {
        setCountries(response.data);
        setLoading(false);
      });
    }

    if(name && region === 'All') { // Busca por nome e região
      setLoading(true);
      await api.get(`/name/${name}`).then(response => {
        setCountries(response.data);
        setLoading(false);
      }).catch(err => {
        alert("Country not found");
        setLoading(false);
      })
    }

    if(name && region !== 'All') { // Busca por nome e região
      setLoading(true);
      await api.get(`/name/${name}`).then(response => {
        const countriesList = [];
        
        response.data.map(country => {
          if(country.region === region) 
            countriesList.push(country);
        });

        setCountries(countriesList);
        setLoading(false);
      }).catch(err => {
        alert("Country not found");
        setLoading(false);
      })
    }
  }

  useEffect(() => {
    loadCountriesDefault();
  }, []);

  return (
    <FilterContext.Provider value={{ countries, loading, loadCountriesByFilter }}>
      { children}
    </FilterContext.Provider>
  );
}
