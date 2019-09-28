import React ,{ useContext }from 'react';
import styled from 'styled-components';

import { ProjectsContext } from '../Store';

// Components
import Heading from '../components/Heading';
import ProjectItem from '../components/ProjectItem';

import API from '../API';


const  Wrapper = styled.section`
	padding: 6em 1.5em;
	background: var(--color-darker);
	color: var(--color-white);
	z-index: 2;
	position: relative;
`

const ProjectsWrapper = styled.div`
	margin-top: 6rem;
`

const ProjectList = (props) => {
	const [projects] = useContext(ProjectsContext); 

	console.log (projects);

  return (
  	<Wrapper id="portfolio">
			<Heading outline color="light">
				Portfolio
			</Heading>
	
		 <ProjectsWrapper>
			{
				projects.map(project => (
					<ProjectItem project={project} key={project.id} ></ProjectItem>
				))
			}
		 </ProjectsWrapper>
  	</Wrapper>
  )
}

export default ProjectList;