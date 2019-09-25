import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Styled components theme
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import GlobalStyles from './utils/globals';

ReactDOM.render( 
	<ThemeProvider theme={theme}>
		<App />
		<GlobalStyles />
	</ThemeProvider>

, document.getElementById('root'));

