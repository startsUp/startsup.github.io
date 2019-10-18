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
	root: {
		height: '100vh',
		display: 'grid',
		gridTemplateRows: 'auto'
	},
    title: {
		fontFamily: '"Righteous", cursive',
		paddingBottom: '0.3em'
	},
	box: {
		maxHeight: '100%',
		overflow: 'auto'
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
			<Container component="main" maxWidth="md" className={classes.root}>
					<CssBaseline />
					<Box className={classes.titleContainer}>
						<Typography variant="h3" color="primary" className={classes.title}>Shardool Patel</Typography>
						<Typography variant="body1">
						3rd-year Software Engineering - Embedded Systems student who loves building 
						scalable and performant software. Interested in utilizing 
						ML, NLP, and AI to build smart software that can help people. 
						</Typography>					
					</Box>
					<NavBar></NavBar>
					
					<Box className={classes.box}>
						<Section title='Experience' contentClass='experience'/>
						<Section title='Projects' contentClass='projects'/>
					</Box>
					
			</Container>
      
    )
  
}

