import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 3rem auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 2rem;

  > a {
    text-decoration: 0;
  }

  > h1.loading {
    color: var(--text-color);
    font-weight: 600;
    font-size: 1.5rem;
    text-align: left;
  }
`;
