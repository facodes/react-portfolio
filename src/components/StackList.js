import React from 'react';
import styled from 'styled-components';
import icons from '../assets/stack-icons';

const StackListWrapper = styled.ul`
	margin-top: 2rem;
	display: flex;
	flex-flow: column wrap;
	align-items: center;
	list-style: none;
	height: 320px;
`

const StackItem = styled.li`
	width: 70px;	
	height: 70px;	
	background-image: ${props => `url("${props.icon}")`};
	background-position: center;
	background-size: cover;
	margin-bottom: 10px;
`

const StackList = (props) => {
  return (
  	<StackListWrapper>
  		{ icons.map(icon => <StackItem icon={icon} key={icon} /> ) }
  	</StackListWrapper>
  )
}

export default StackList;