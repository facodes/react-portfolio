import React from 'react';
import styled , { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Wrapper =  styled.div`
	width: 100%; 
	font-size : 4.8rem;
	padding: 1.45em .6em; 
	color: var(--color-white);
	background-color: var(--color-dark);
`

const Container = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Name = styled.h1`
	font-weight: var(--bold);
	text-transform: capitalize;	
	font-size: 4.8rem;
	
`
const Ocupation = styled.p`
	text-transform: uppercase;
	font-weight: var(--meidium);
	font-size: 1.8rem;
`
const HighLight = styled.span`
	background: linear-gradient(to right, var(--color-green) 0%, var(--color-blue) 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`

const ScrollDownAnimation = keyframes`
	0%{
		transform: translateY(-100%);
	}	
	100%{
	 transform: translateY(100%);
	}
`

const ContactList = styled.ul`
	margin-top: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;
`

const ListItem = styled.li`

	padding: 0.3em;
	font-size: 1.8rem;
	line-height: 1;

	a{
		color: var(--color-white);
		font-size: 2.4rem;
		text-decoration: none;
	}

	&:not(:last-child){
		margin-right: 1rem;
	}

`


const ScrollDown = styled.div`
	display: none;
	position: relative;
	overflow: hidden;
	width: 1px;
	height: 40px;
	margin-top: 4rem;

	&::before{
		content: '';
		position: absolute;
		background: var(--color-white);
		top: 0;
		bottom: 0;
		width: 100%;
		animation-name: ${ScrollDownAnimation};
		animation-duration: 1.5s;
		animation-timing-function: ease;
		animation-iteration-count: infinite;
		animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
	}
`

const Hero = (props) => {
  return (
  	<Wrapper>
  		<Container>
				<Name>
					felix lopez
				</Name>
				<Ocupation>
					<HighLight>front end </HighLight> web developer
				</Ocupation>
  		</Container>
  		<ContactList>
  			<ListItem>
  				<a href="#">
  					<FontAwesomeIcon icon ="envelope"/>
  				</a>
  			</ListItem>
  			<ListItem>
  				<a href="#">
  					<FontAwesomeIcon icon ={['fab', 'github']}/>
  				</a>
  			</ListItem>
  			<ListItem>
  				<a href="#">
  					<FontAwesomeIcon icon ={['fab', 'linkedin']}/>
  				</a>
  			</ListItem>
  			<ListItem>
  				<a href="#">
  					<FontAwesomeIcon icon ={['fab', 'instagram']}/>
  				</a>
  			</ListItem>
  		</ContactList>
  	</Wrapper>
  )
}

export default Hero;