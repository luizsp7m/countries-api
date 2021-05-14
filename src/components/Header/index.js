import React from 'react';

import { BsFillBrightnessLowFill, BsFillBrightnessHighFill } from 'react-icons/bs'

import { Container, Wrapper } from './styles';

function Header() {
  return (
    <Container>
      <Wrapper>
        <div className="logo">Where in the world?</div>

        <div className="switch-mode">
          <BsFillBrightnessLowFill className="icon" />
          <span>Dark Mode</span>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Header;