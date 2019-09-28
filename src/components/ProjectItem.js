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
	}
`;

const DescriptionText = styled.p`
	font-size: 1.6rem;
	padding: 0.8em  0;
	font-weight: var(--regular);
`
const ImageContainer = styled.div`
	

`

const Image = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
	object-position: center center;
`;

const Footer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 0 2em;
	

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


const ProjectItem = ({project}) => {
  return (
    <Wrapper>
  		<Header>
  			<h1>
  				{project.title}
  			</h1>
  		</Header>
			<ImageContainer>
				<picture>
					<source media="(min-width: 900px)" srcset={project.desktop}/>
					<Image src={project.mobile} alt="a project picture"/>
				</picture>
			</ImageContainer> 
			<DescriptionText>
				{project.description}
			</DescriptionText>
			<Footer>
				<ButtonLink href={project.website}>
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