import React , { useState, useEffect }from 'react';
import { Route, Link } from 'react-router-dom';

import contentful from "./api/contentful";

import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faBars
} from '@fortawesome/free-solid-svg-icons';

import { fab, faGithub} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Pages 
import Home from './pages/Home';
import Project from './pages/Project';

library.add(
  fab,
  faBars,
  faGithub,
 );

function App() {

	const [projects, setProjects] = useState([]);

	console.log (contentful);

	useEffect(() => {
    async function getProjects() {
      const { items } = await contentful.getEntries({
        content_type: "project"
      });
    }

    getProjects();
  }, [projects]);

  return (
    <div >
			<Link to="/">Home</Link>
			<Link to="/project">Poject</Link>

    	<Route exact path="/" component={Home}/>
    	<Route path="/project" component={Project}/>
    </div>
  );
}

export default App;
