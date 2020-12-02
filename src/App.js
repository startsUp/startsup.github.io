import React from 'react';
import './App.css';
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CanvasScene from './components/canvas';
import { Divider, IconButton, useMediaQuery } from '@material-ui/core';
import { getTheme } from './theme'
import { AlternateEmailOutlined, LinkedIn, WorkOutline,  } from '@material-ui/icons';
const useStyles = makeStyles(theme => ({
    lowkey:{
        position: "absolute",
        right: '0',
        top: '0',
        fontSize: '5px'
    },
    gradientText: {
        background: theme.textGradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    title: {
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '10vw',
        },
        // -webkit-background-clip: text;
	    // -webkit-text-fill-color: transparent;
    },
	box: {
		maxHeight: '100%',
        overflow: 'auto',
        background: theme.palette.background.default
    },
    icons: {
        paddingTop: '0.5em',
        display: 'flex',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridGap: theme.spacing(5),
        gap: theme.spacing(5),
        background: theme.textGradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        [theme.breakpoints.down('sm')]: {
            gridGap: theme.spacing(2.5),
            gap: theme.spacing(2.5),
        },
    },
	titleContainer: {
        padding: '1em',
        paddingTop: '3em',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '1em',
        },
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
    },
    titleBar: {
        display: 'grid',
        gridGap: '1em',
        justifyItems: 'center',
        gap: '1em',
        textAlign: 'center'
    },
    workTitle:{
        
    },
    iconCont:{
        fontSize: '1em'
    }
}));


function Title(){
    const classes = useStyles();
    return(
        <Box className={classes.titleContainer}>
            <div className={classes.titleBar}>
                    <Typography variant="h1" className={`${classes.title} ${classes.gradientText}`}>shardool patel</Typography>
                    <Divider/>
                    <Typography variant="h5">
                       software engineer
                    </Typography>
                    <Typography variant="h6" className={classes.workTitle}>
                        Seeking opportunities to build empowering tech.
                    </Typography>
                    <Box className={classes.icons}>
                        <div >
                            <IconButton className={classes.iconCont} href='/Shardool_Resume.pdf' target="_blank">
                                <WorkOutline fontSize="large"/>
                            </IconButton>
                            <Typography variant="h6">Resume</Typography>
                        </div>
                        <div>
                            <IconButton className={classes.iconCont} href='https://github.com/startsup' target="_blank">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path></svg>
                            </IconButton>
                            <Typography variant="h6">Projects</Typography>
                        </div>
                        <div >
                            <IconButton className={classes.iconCont} href='https://linkedin.com/in/sp97' target="_blank">
                                <LinkedIn fontSize="large"/>
                            </IconButton>
                            <Typography variant="h6">LinkedIn</Typography>
                        </div>
                        <div className={classes.gradientText} >
                            <IconButton className={classes.iconCont} href='mailto:shardool_patel@hotmail.com'>
                                <AlternateEmailOutlined fontSize="large" />
                            </IconButton>
                            <Typography variant="h6" >Contact</Typography>
                        </div>
                        {/* <Tooltip title="About Me">
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
                        </Tooltip> */}
                        
                            {/* <a href='/Shardool_Resume.pdf'>
                            <Icon className="material-icons-outlined">save_alt</Icon>
                            </a> */}
                    </Box>

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
                <CssBaseline />
            <div>
                <CanvasScene/>
                <Container>
                        <Title></Title>
                </Container>
            </div>
        </ThemeProvider>
    )

}
