import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
	color: ${props => props.color ? `var(--color-${props.color})` : `inherit`};
`

const Heading = (props) => {
  return (
    <StyledHeading outline={props.outline} color={props.color}>
			{props.children}
    </StyledHeading>
  )
}

export default Heading;