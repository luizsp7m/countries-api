import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Wrapper } from './styles';
import { CustomThemeContext } from '../../theme-provider';
import Switch from "react-switch";

function Header() {
  const { switchTheme, theme } = useContext(CustomThemeContext);

  return (
    <Container>
      <Wrapper>
        <Link to={'/'} className="logo">Where in the world?</Link>

        <div className="switch-mode">
          <Switch 
            onChange={switchTheme}
            onColor='#202C37'
            offColor='#ccc'
            checked={theme === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={15}
            width={30}
            handleDiameter={15}
          />
          <span>Dark Mode</span>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Header;