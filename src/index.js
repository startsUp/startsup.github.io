import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  
import blueGrey from "@material-ui/core/colors/blueGrey";
import lightGreen from "@material-ui/core/colors/lightGreen";
import { fade } from '@material-ui/core/styles/colorManipulator';

const theme = createMuiTheme({
    palette: {
        background: {
            paper: fade('#fff',0.16),
            default: '#ECE9E6'
        }
       
    },
 
     typography: {
        fontFamily: [
            '"Playfair Display", serif',
        ].join(','),
        h1: {
            fontFamily: "'Major Mono Display', monospace"
        },
        body1: {
            fontFamily: '"Lato", sans-serif'
        },
        body2: {
            fontFamily: '"Lato", sans-serif',
            fontSize: '0.935rem'
        }
   },
 });

ReactDOM.render(
<MuiThemeProvider theme={ theme }>
    <Home />
</MuiThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
