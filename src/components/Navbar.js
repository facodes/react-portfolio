import React from 'react';
import styled from 'styled-components';
import  logo from '../assets/logo.png';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledNavbar = styled.div`
	position: absolute;
	z-index: 1080;
	width: 100%;
	background : var(--color-dark);
	padding: 1.6em 3.2em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: var(--color-white);
`

const LogoContainer = styled.div`
	width: 25px;
	img{
		margin-top: 10px;
		width: 100%;
	}
`

const Navbar = (props) => {
  return (
  	<StyledNavbar>
  		<LogoContainer>
  			<img src={logo} alt="felix lopez logo"/>
  		</LogoContainer>
			<FontAwesomeIcon icon="bars" size="2x"/> 
  	</StyledNavbar>
  )
}

export default Navbar;