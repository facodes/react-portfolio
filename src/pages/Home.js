import React from 'react';
import styled from 'styled-components';

// components
import Hero from '../components/Hero';
import ProjectList from '../components/ProjectList';

const Wrapper = styled.div`
	padding: 10px;

`

const Home = (props) => {
  return (
  	<>
			<Hero />
			<ProjectList />
  	</>
  )
}

export default Home;