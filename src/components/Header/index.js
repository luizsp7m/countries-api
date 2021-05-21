import React from 'react';

import { BsFillBrightnessLowFill, BsFillBrightnessHighFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

import { Container, Wrapper } from './styles';

function Header() {
  return (
    <Container>
      <Wrapper>
        <Link to={'/'} className="logo">Where in the world?</Link>

        <div className="switch-mode" onClick={() => alert('change')}>
          <BsFillBrightnessLowFill className="icon" />
          <span>Dark Mode</span>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Header;