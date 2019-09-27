import React from 'react';
import styled from 'styled-components';

// Components
import  ButtonLink from './ButtonLink';


const Wrapper = styled.div`
	margin: 2rem 0;
	width: 100%;


`;

const Header = styled.header`

	position: relative;
	width: 100%;
	height: 45px;

	h1{
		position: absolute;
		font-size: 3rem;
		font-weight: var(--bold);
		text-transform: capitalize;
		left: -16px;
	}
`;

const Image = styled.div`
	width: 100%;
	height: 300px;
	background-image: ${props => `url("${props.url}")`};
	background-position: center;
	background-size: cover;
	
`;

const Footer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 2em;
	

	&::before{
		content: '';
		position: absolute;
		left: 10%;
		right: 10%;
		top: 50%;
		transform: translateY(-50%);
		height: 1px;
		background: var(--color-white);
		z-index: 1;
	}
`;


const ProjectItem = (props) => {
  return (
    <Wrapper>
  		<Header>
  			<h1>
  				{props.project.name}
  			</h1>
  		</Header>
			<Image url={props.project.url}>
				
			</Image>
			<Footer>
				<ButtonLink href="https://www.instagram.com" left>
					website
				</ButtonLink>
				<ButtonLink>
					Source
				</ButtonLink>
			</Footer>
    </Wrapper>
  )
}

export default ProjectItem;