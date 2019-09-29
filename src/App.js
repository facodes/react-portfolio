import React , { useState, useEffect , useContext }from 'react';
import { Route } from 'react-router-dom';
import { ProjectsContext } from './Store';

import contentful from "./api/contentful";

import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faBars,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import { fab } from '@fortawesome/free-brands-svg-icons';

// Pages 
import Home from './pages/Home';

// Components
import Navbar from './components/Navbar';

library.add(
  fab,
  faBars,
  faEnvelope,
 );

function App() {

	const [projects, setProjects] = useContext(ProjectsContext);
  const [isInit, setIsInit] = useState(true);

	useEffect(() => {
    async function getProjects() {
      const { items } = await contentful.getEntries({
        content_type: "project"
      });

      const fetchedProjects = items.map(item => {
        const images = item.fields.images.map(image => {
          return image.fields.file.url;
        });
        const id = item.sys.id;
        return { id, ...item.fields, desktop: images[0], mobile: images[1] };
      });

      setProjects(fetchedProjects);
      setIsInit(true);
    }
    
    getProjects();
  }, []);

  return (
    < >
      {
        isInit ? (
         <main>
            <Navbar />
            <Route exact path="/" component={Home}/>
         </main>
        ) : ( <h1>Loading</h1> )
      }
    </>
  );
}

export default App;
