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
        type: "dark",
        primary: {
            light: '#6200EE',
            main: "#18ffff",
            dark: '#BB86FC',
            contrastText: "#B2FF59"
        },
        secondary: {
            light: '#03DAC6',
            main: '#03DAC6',//#18ffff
            dark: '#03DAC6',
        },
        background: {
            paper: fade('#fff',0.16),
            default: '#121212'
        }
       
    },
 
     typography: {
     fontFamily: [
        '"Hammersmith One", sans-serif'
     ].join(','),
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
