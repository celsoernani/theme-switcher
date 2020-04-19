import React, {useContext} from 'react';
import Switch from 'react-switch';
import {ThemeContext} from 'styled-components';
import {shade} from 'polished';
import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}


const Header: React.FC<Props> = ({toggleTheme}) => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
     Hello Header 

     <Switch 
      onChange = {() => toggleTheme()}
      checked = {theme.title === 'dark'}
      checkedIcon = {false}
      uncheckedIcon = {false}
      height = {10}
      width= {40}
      handleDiameter = {20}
      offColor = {shade(0.2, theme.colors.secundary)}
      onColor = {theme.colors.text}
     />
    </Container> 
  )
}

export default Header;