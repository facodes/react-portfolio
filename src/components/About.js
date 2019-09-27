import React from 'react';
import styled from 'styled-components';

// components
import Heading from './Heading';


const Wrapper = styled.section`
	background: var(--color-white);
	color: var(--color-darker);
  padding: 6em 3.2em;
`
const AboutWrapper = styled.div`
`

const StackWrapper = styled.div`
 margin-top: 6rem;
`


const TextContainer = styled.div`
	margin-top: 2rem;	
`
const Paragraph = styled.p`
	font-size: 1.7rem;
	font-weight: var(--regular);
	line-height: 1.4;
	&:not(:last-child){
		margin-bottom: 2rem; 
	}
`
const HightLighter = styled.span`
	font-weight: var(--bold);
	text-decoration: underline;
`

const About = (props) => {
  return (
  	<Wrapper>
	  	<AboutWrapper>
	  		<Heading>
	  			about
	  		</Heading>
	  		<TextContainer>
					<Paragraph>
						Hi, my name is Felix Lopez, a 21 years old <HightLighter> Front End Web Developer </HightLighter> and student of Informatics Engineering from Venezuela
					</Paragraph>	
					<Paragraph>
						I started web development more than a year ago doing some projects assigned by a class at university, from there I got hooked on this world and started making my own projects.
					</Paragraph>	
					<Paragraph>
						I'm <HightLighter>self-taught</HightLighter>, fast learner, and a true believer that anything
						 can be possible with hard work, dedication, and passion.
					</Paragraph>
	  		</TextContainer>			
	  	</AboutWrapper>
	  	<StackWrapper>
	  		<Heading>
	  			skills
	  		</Heading>
	  	</StackWrapper>
  	</Wrapper>
  )
}

export default About;