import React from 'react';
import styled from 'styled-components';

// sections
import Hero from '../sections/Hero';
import ProjectList from '../sections/ProjectList';
import About from '../sections/About';
import Footer from '../sections/Footer';

const Wrapper = styled.div`
	padding: 10px;

`

const Home = (props) => {
  return (
  	<>
			<Hero />
			<ProjectList />
			<About />
			<Footer />
  	</>
  )
}

export default Home;