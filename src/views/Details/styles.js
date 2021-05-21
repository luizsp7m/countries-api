import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 5rem auto;

  > h1.loading {
    color: var(--text-color);
    font-weight: 600;
    font-size: 1.5rem;
    margin-top: 5rem;
    text-align: left;
  }

  > a {
    text-decoration: none;
    color: var(--text-color);
    background: var(--primary-color);
    padding: 1rem 2rem;
    border-radius: .5rem;
    box-shadow: 0 0 1em rgba(0, 0, 0, .035);
    width: 10rem;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;

    border: 1px solid rgba(0, 0, 0, .085);

    > .icon {
      margin-right: 1rem;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin-top: 5rem;
  grid-gap: 3rem;

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.div`
  > img {
    width: 100%;
    height: 338px;
    object-fit: cover;
  }

  @media(max-width: 768px) {
    > img {
      height: 250px;
    }
  }
`;

export const About = styled.div`
  color: var(--text-color);

  > div.country-name {
    font-size: 2.5rem;
    font-weight: 800;
  }

  > div.card-container {
    display: flex;
    align-items: flex-start;
    gap: 8rem;
    margin: 3rem 0;

    > div.card-body {
      > div.card-text {
        font-size: 1.5rem;
        letter-spacing: .05rem;
        margin: .75rem 0;

        > span {
          font-weight: 600;
        }

        > label {
          opacity: .65;
        }
      }
    }
  }

  > div.border-countries {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    > h5 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-right: 2rem;
      min-width: 12rem;
    }

    > div.countries-list {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      > a {
        text-decoration: none;
        color: var(--text-color);
        background: var(--primary-color);
        padding: .75rem 2rem;
        border-radius: .5rem;
        box-shadow: 0 0 1em rgba(0, 0, 0, .035);
        font-size: 1.4rem;
        border: 1px solid rgba(0, 0, 0, .085);
      }
    }
  }

  @media(max-width: 768px) {
    > div.card-container {
      flex-direction: column;
      gap: 2rem;
    }

    > div.border-countries {
      flex-direction: column;
      align-items: flex-start;

      > h5 {
        margin-bottom: 2rem;
      }
    }
  }
`;