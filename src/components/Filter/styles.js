import styled from 'styled-components';

export const Container = styled.div`

`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 3rem auto;

  display: flex;
  justify-content: space-between;

  > div.input-group {
    display: flex;
    border: 1px solid rgba(0, 0, 0,.05);

    > button {
      height: 4.5rem;
      width: 4.5rem;
      border: 0;
      background: var(--primary-color);
      font-size: 0;
      border-top-left-radius: .5rem;
      border-bottom-left-radius: .5rem;
      cursor: pointer;
      border-right: 1px solid rgba(0, 0, 0, .05);
      outline: 0;

      > .icon {
        color: var(--text-color);
        font-size: 1.8rem;
      }
    }

    > input {
      background: var(--primary-color);
      color: var(--text-color);
      border: 0;
      outline: 0;
      padding: 0 2rem;
      width: 30rem;
      border-top-right-radius: .5rem;
      border-bottom-right-radius: .5rem;

      &::placeholder {
        color: var(--text-color);
      }
    }
  }

  > select {
    border: 0;
    outline: 0;
    height: 4.5rem;
    width: 20rem;
    border-radius: .5rem;
    padding: 0 2rem;
    background: var(--primary-color);
    color: var(--text-color);
    border: 1px solid rgba(0, 0, 0,.05);

    -webkit-appearance: none;
    -moz-appearance: none;
  }

  @media(max-width: 625px) {
    flex-direction: column;
    gap: 1rem;

    > div.input-group {
      > input {
        width: 100%;
      }
    }

    > select {
      width: 50%;
    }
  }
`;