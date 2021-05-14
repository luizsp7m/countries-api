import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [region, setRegion] = useState();
  const [name, setName] = useState();

  return (
    <FilterContext.Provider value={{ region, setRegion, name, setName }}>
      { children }
    </FilterContext.Provider>
  );
}
