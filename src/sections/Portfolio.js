import React from 'react';
import styled from 'styled-components';

// Components
import Heading from '../components/Heading';
import ProjectItem from '../components/ProjectItem';


import API from '../API';

const  Wrapper = styled.section`
	padding: 1.6em 5em;
	background: var(--color-darker);
	color: var(--color-white);
	z-index: 2;
	position: relative;

`

const ProjectList = (props) => {



  return (
  	<Wrapper id="portfolio">
			{
				API.map(project => (
					<ProjectItem project={project} key={project.id} ></ProjectItem>
				))
			}
  	</Wrapper>
  )
}

export default ProjectList;