import React from 'react';
import styled from 'styled-components';

// Components
import  ButtonLink from './ButtonLink';

const Wrapper = styled.div`
	width: 100%;

	&:not(:last-child){
		margin-bottom: 8rem;
	}

`;

const Header = styled.header`
	position: relative;
	width: 100%;
	height: 50px;
	h1{
		position: absolute;
		font-size: 2.4rem;
		font-weight: var(--bold);
		text-transform: capitalize;
		left: 16px;

	  @media ${props => props.theme.mediaQueries.small}{
	    font-size: 2.8rem;
	    left: 20px;
	  }
	}
`;

const DescriptionText = styled.p`
	font-size: 1.6rem;
	padding: 0.8em  1em;
	font-weight: var(--regular);

	@media ${props => props.theme.mediaQueries.small}{
	  font-size: 2rem;
	}
`
const Image = styled.img`
	width: 100%;
	min-height: 200px;
	object-fit: cover;
	object-position: center center;
`;

const Footer = styled.div`
	position: relative;
	width: 100%;
	max-width: 280px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	padding:0 4em;
	margin-top: 1rem;
	
	&::before{
		content: '';
		position: absolute;
		left: 20%;
		right: 20%;
		top: 50%;
		transform: translateY(-50%);
		height: 1.8px;
		background: var(--color-white);
		z-index: 1;
	}
	
	@media ${props => props.theme.mediaQueries.small}{
	  max-width: 350px;
	}

`;

const ProjectItem = ({project}) => {
  return (
    <Wrapper>
  		<Header>
  			<h1>
  				{project.title}
  			</h1>
  		</Header>
			<picture>
				<source media="(min-width: 900px)" srcSet={project.desktop}/>
				<Image src={project.mobile} alt="a project picture"/>
			</picture>
			<DescriptionText>
				{project.description}
			</DescriptionText>
			<Footer>

				<ButtonLink href={project.website} color="blue-lg">
					demo
				</ButtonLink>
				<ButtonLink  href={project.source}>
					code
				</ButtonLink>
			</Footer>
    </Wrapper>
  )
}

export default ProjectItem;