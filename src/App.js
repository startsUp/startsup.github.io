import React, { Component } from 'react';
import logo from './logo.svg';
import pic from './res/pic.png'
import Card from './components/card'
import NavBar from './components/navbar'
import './App.css';
import {Section} from './components/section'
import { makeStyles } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    title: {
			fontFamily: '"Righteous", cursive',
		},
		titleContainer: {
			textAlign: 'center',
			padding: '1em'
		},
		image: {
			backgroundImage: "url(https://source.unsplash.com/random)",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
			backgroundPosition: "center"
		},
		paper: {
			margin: theme.spacing(8, 4),
			display: "flex",
			flexDirection: "column",
			alignItems: "center"
			},
		link: {
					margin: 'auto'
			}
    }));

export default function Home(props){
    const classes = useStyles();
  
    return (
			<Container component="main" maxWidth="md">
					<CssBaseline />
					<Box className={classes.titleContainer}>
						<Typography variant="h2" color="primary" className={classes.title}>Shardool Patel</Typography>
					</Box>
					<Paper>
						<Typography>
						3rd-year Software Engineering - Embedded Systems student who loves building 
							scalable and performant software. Interested in utilizing 
							ML, NLP, and AI to build smart software that can help people. 
						</Typography>
					</Paper>
					<Section title='Experience' contentClass='experience'/>
			</Container>
      
    )
  
}

