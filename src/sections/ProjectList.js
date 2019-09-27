import React from 'react';
import styled from 'styled-components';

// Components
import Heading from '../components/Heading';
import ProjectItem from '../components/ProjectItem';


import API from '../API';

const  Container = styled.div`
	padding: 1.6em 3.2em;
	background: var(--color-darker);
	color: var(--color-white);


`

const ProjectList = (props) => {



  return (
  	<Container>
			{
				API.map(project => (
					<ProjectItem project={project} key={project.id} ></ProjectItem>
				))
			}
  	</Container>
  )
}

export default ProjectList;