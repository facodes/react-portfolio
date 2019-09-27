import React from 'react';
import styled from 'styled-components';

// sections
import Hero from '../sections/Hero';
import Portfolio from '../sections/Portfolio';
import About from '../sections/About';
import Footer from '../sections/Footer';

const Wrapper = styled.div`
	position: relative;

`
const ViewHeightDiv = styled.div`
	height: 100vh;
`
const Home = (props) => {
  return (
  	<Wrapper>
			<Hero />
			<ViewHeightDiv/>
			<Portfolio />
			<About />
			<Footer />
  	</Wrapper>
  )
}

export default Home;