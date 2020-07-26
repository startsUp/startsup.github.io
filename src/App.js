import React from 'react';
import './App.css';
import {Section} from './components/section'
import { makeStyles } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CanvasScene from './components/canvas';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';
import Resume from './res/Shardool_Resume.pdf';

const useStyles = makeStyles(theme => ({
	root: {

    },
    lowkey:{
        position: "absolute",
        right: '0',
        top: '0',
        fontSize: '5px'
    },
    title: {
		fontFamily: '"Playfair Display", serif',
	},
	box: {
		maxHeight: '100%',
        overflow: 'auto',
        background: theme.palette.background.default
    },
    icons: {
        paddingTop: '0.3em',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridGap: '10px',
        width: '100px'
    },
	titleContainer: {
		padding: '5em 0 5em 0'
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


function Title(){
    const classes = useStyles();
    return(
        <Box className={classes.titleContainer}>
            <div className={classes.lowkey}>Pls hire me</div>
            <div className="title-bar">
                <div id="name-div">
                    <Typography variant="h3" color="primary" className={classes.title}>Shardool Patel</Typography>
                    <Typography variant="body1">
                        Student | Software Engineer
                    </Typography>
                    <Box className={classes.icons}>
                        <Tooltip title="About Me">
                            <a href="#Me">
                                <Icon>person_outline</Icon>
                            </a>
                        </Tooltip>
                        <Tooltip title="Work Experience">
                            <a href="#Work">
                                <Icon>work_outline</Icon>
                            </a>
                        </Tooltip>
                        <Tooltip title="Projects">
                            <a href="#Projects">
                            <Icon className="material-icons-outlined">palette</Icon>
                            </a>
                        </Tooltip>
                        <Tooltip title="Resume">
                            <a href={Resume}>
                            <Icon className="material-icons-outlined">save_alt</Icon>
                            </a>
                        </Tooltip>
                    </Box>

                </div>
            	<div id="canvas-div">
                    <CanvasScene/>
                </div>
            </div>

        </Box>
    )

}
export default function Home(props){
    const classes = useStyles();

    return (
        <div>

             <Container className={classes.root}>

					<CssBaseline />
					<Title></Title>


					<Box>
                        <Section title='About Me' link="Me" contentClass='aboutme' icon="person_outline"/>
						<Section title='Experience' link="Work" contentClass='experience' icon="work_outline"/>
						<Section title='Projects' link="Projects" contentClass='projects' icon="palette"/>
					</Box>

			</Container>
        </div>


    )

}
