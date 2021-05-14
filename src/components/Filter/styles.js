import styled from 'styled-components';

export const Container = styled.div`

`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 3rem auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > input, select {
    border: 0;
    outline: 0;
    padding: 1.4rem 2rem;
    border-radius: .5rem;
    background: var(--primary-color);
    font-size: 1.4rem;
    color: var(--text-color);
    box-shadow: 0 0 1em rgba(0, 0, 0, .035);

    &::placeholder {
      color: var(--text-color);
      font-size: 1.4rem;
    }
  }

  > input {
    min-width: 40rem;
  }

  > select {
    min-width: 20rem;
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
  }

  @media(max-width: 680px) {
    flex-direction: column;
    align-items: flex-start;

    > input {
      width: 100%;
    }

    > select {
      margin-top: 2rem;
      width: 50%;
    }
  }
`;