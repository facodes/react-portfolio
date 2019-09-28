import React, {useState, createContext} from 'react';

export const ProjectsContext = createContext('Projects');

const Store = ({children}) => {
	const [projects, setProjects] = useState([])
  return (
  	<ProjectsContext.Provider value ={[projects, setProjects]}>
			{children}
  	</ProjectsContext.Provider>
  )
}

export default Store;