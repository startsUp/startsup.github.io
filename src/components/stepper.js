import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from "@material-ui/styles";
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Step from '@material-ui/core/Step';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Stepper, StepContent } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    root: {
      width: '90%',
      margin: 'auto'
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }));





export default function VerticalLinearStepper(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const getSteps = () => {
        return props.info.experience.map((work) => work.title)
    }

    const steps = getSteps();
  
   
    const getStepContent = (step) => {
        return props.info.experience[step].desc
    }
    const getStepTimeline = (step) => {
        return props.info.experience[step].timeline
    }

    const handleNext = () => {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  
    return (
      <div className={classes.root}>
      <Stepper orientation="vertical">
        <List component="nav" aria-label="main mailbox folders">
          <ListItem>
            <Step>

            <StepContent>
              asd
            </StepContent>
            </Step>
          </ListItem>
          
          <ListItem>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
      </Stepper>
     
      </div>
    );
  }