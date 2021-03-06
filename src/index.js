import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// CSSBaseLine
import CssBaseline from '@material-ui/core/CssBaseline';

// Theme
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/theme'

ReactDOM.render(
  <ThemeProvider theme={ theme }>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
