import React from 'react';
import styled from 'styled-components';

// components
import Hero from '../components/Hero';
import ProjectList from '../components/ProjectList';
import About from '../components/About';

const Wrapper = styled.div`
	padding: 10px;

`

const Home = (props) => {
  return (
  	<>
			<Hero />
			<ProjectList />
			<About />
  	</>
  )
}

export default Home;