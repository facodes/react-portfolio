import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
	display: inline-block;
	color: ${props => props.color ? `var(--color-${props.color})` : `var(--color-darker)`};
	font-size: 4rem;
	font-weight: var(--bold);
	text-transform: capitalize;
	position: relative;
	line-height: 1.2;

	&::after{
		content: '';
		position: absolute;
		bottom: 0;
		right: -5px;
		width: 70px;
		height: 4px; 
		background: currentColor;
	}
	

`

const Heading = (props) => {
  return (
    <StyledHeading outline={props.outline} color={props.color}>
			{props.children}
    </StyledHeading>
  )
}

export default Heading;