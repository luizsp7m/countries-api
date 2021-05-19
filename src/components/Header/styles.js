import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary-color);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .05);
`;

export const Wrapper = styled.div`
  height: 7rem;
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > a.logo {
    font-size: 1.8rem;
    color: var(--text-color);
    font-weight: 800;
    text-decoration: 0;
  }

  > div.switch-mode {
    display: flex;
    align-items: center;
    cursor: pointer;

    > .icon {
      color: var(--text-color);
      font-size: 1.4rem;
    }

    > span {
      margin-left: 1rem;
      font-size: 1.4rem;
      color: var(--text-color);
      font-weight: 600;
    }
  }
`;