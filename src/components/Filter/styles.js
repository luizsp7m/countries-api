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

  > div.input-group {
    display: flex;
    box-shadow: 0 0 1em rgba(0, 0, 0, .035);

    > input {
      border: 0;
      outline: 0;
      padding: 1.4rem 2rem;
      background: var(--primary-color);
      font-size: 1.4rem;
      color: var(--text-color);
      min-width: 35rem;
      border-top-left-radius: .5rem;
      border-bottom-left-radius: .5rem;

      &::placeholder {
        color: var(--text-color);
        font-size: 1.4rem;
      }
    }

    > button {
      border: 0;
      width: 5rem;
      font-size: 0;
      background: var(--primary-color);
      border-left: 1px solid rgba(0, 0, 0, .1);
      cursor: pointer;
      border-top-right-radius: .5rem;
      border-bottom-right-radius: .5rem;

      > .icon {
        font-size: 2rem;
        color: var(--text-color);
      }
    }
  }

  > select {
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