import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './Store';

import { BrowserRouter as Router } from 'react-router-dom';

// Styled components theme
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import GlobalStyles from './utils/globals';

ReactDOM.render( 
	<ThemeProvider theme={theme}>
		<Router>
			<Store>
				<App />
				<GlobalStyles />
			</Store>
		</Router>
	</ThemeProvider>

, document.getElementById('root'));

