import React from 'react';
import './App.css';
import {Section} from './components/section'
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CanvasScene from './components/canvas';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';
import { useMediaQuery } from '@material-ui/core';
import { getTheme } from './theme'
const useStyles = makeStyles(theme => ({
    lowkey:{
        position: "absolute",
        right: '0',
        top: '0',
        fontSize: '5px'
    },
    title: {
        // background: 'linear-gradient(90deg, rgba(226,19,194,1) 0%, rgba(129,200,237,1) 30%, rgba(50,240,39,1) 65%, rgba(255,201,4,1) 100%)',
        // WebkitBackgroundClip: 'text',
        // WebkitTextFillColor: 'transparent'
        // -webkit-background-clip: text;
	    // -webkit-text-fill-color: transparent;
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
        padding: '5em 0 5em 0',
        // position: 'fixed',
        // top: '1em'
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
            <div className="title-bar">
                <div id="name-div">
                    <Typography variant="h1" className={classes.title}>Shardool Patel</Typography>
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
                            <a href='/Shardool_Resume.pdf'>
                            <Icon className="material-icons-outlined">save_alt</Icon>
                            </a>
                        </Tooltip>
                    </Box>

                </div>
            </div>
        </Box>
    )

}
export default function Home(props){
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
      () => getTheme(prefersDarkMode ? 'dark' : 'light'),
      [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <div>
                <CanvasScene/>
                <Container>
                        <Title></Title>
                        <CssBaseline />
                </Container>
            </div>
        </ThemeProvider>
    )

}
