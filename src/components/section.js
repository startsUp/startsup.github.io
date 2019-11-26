import info from '../res/info'
import React, { Component } from 'react'
import Card from './card' 
import Stepper from './stepper'
import { Paper } from '@material-ui/core';
import { borders } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from "@material-ui/styles";
import SwipeableTextMobileStepper from './horizontalStepper';
import AboutMe from './me';
import Projects from './projects';

const useStyles = makeStyles(theme => ({
	sectionTitle: {
        padding: '0.2em 0 0.2em 0.7em',
        alignItems: 'flex-end'
    }
}));

export function Section(props){
    const classes = useStyles();
    return (
        <Paper className="outlined-paper">
           
                {/* Title  */}
                <Grid container className={classes.sectionTitle} spacing={1}>
                    <Grid item>
                        <Icon className="material-icons-outlined">{props.icon}</Icon>
                    </Grid>
                    <Grid item>
                        <Typography  variant="h6" color="primary" >{props.title}</Typography>
                    </Grid>
                </Grid>

                {/* Content */}
                <Grid container className={props.contentClass}>
                    {props.title==='Projects' &&
                        // info.projects.map((project)=>{
                        //     return(<Card info={project}/>)
                        // })
                        <Projects/>
                    }
                    {props.title==='Experience' &&
                        <SwipeableTextMobileStepper/>
                    }
                    {props.title === 'About Me' &&
                        <AboutMe/>
                    }
                </Grid>
            
        </Paper>
    )
}