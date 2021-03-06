import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary-color);
  border-radius: .5rem;
  border: 1px solid rgba(0, 0, 0,.05);

  > div.flag-image {
    width: 100%;

    > img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      /* border-top-left-radius: .5rem;
      border-top-right-radius: .5rem; */
    }
  }

  > div.information {
    padding: 2rem 2rem 4rem 2rem;
    color: var(--text-color);

    > h1 {
      margin-bottom: 1rem;
      font-size: 1.8rem;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    > span {
      display: block;
      font-size: 1.4rem;

      > b {
        font-weight: 600;
        letter-spacing: .05rem;
      }
    }
  }
`;
