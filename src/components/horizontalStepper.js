import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { bindKeyboard } from 'react-swipeable-views-utils';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const tutorialSteps = [
  {
    label: 'ArcelorMittal Dofasco | Software Engineering Intern',
    timeline: 'May 2019 - Present',
    work: [
        'Applied Object Oriented design principles to build and deploy full-stack applications for internal business users using .NET, Java and Angular',
        'Promptly implemented changes and added features to internal applications by coordinating with business users.',
        'Optimized SQL queries for various internal and external applications.',
        'Created standard Jenkins Pipelines for CI/CD for all applications cutting down configuration and maintenance time by 99%.',
        'Setup Kubernetes on-prem and created pipelines to build containers and deploy to Azure registry and Kubernetes cluster.',
        'Automated configuration tasks using Ansible.',
    ],
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Autonomous Robots and Vehicles Innovations | Software Developer',
    timeline: 'Nov 2018 - May 2019',
    work: [
        'Applied Object Oriented design principles to build and deploy full-stack applications for internal business users using .NET, Java and Angular',
        'Promptly implemented changes and added features to internal applications by coordinating with business users.',
        'Optimized SQL queries for various internal and external applications.',
        'Created standard Jenkins Pipelines for CI/CD for all applications cutting down configuration and maintenance time by 99%.',
        'Setup Kubernetes on-prem and created pipelines to build containers and deploy to Azure registry and Kubernetes cluster.',
        'Automated configuration tasks using Ansible.',
    ],
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Oshawa Power and Utilities | Summer Intern',
    timeline: 'May 2017 - August 2017',
    work: [
        'Applied Object Oriented design principles to build and deploy full-stack applications for internal business users using .NET, Java and Angular',
        'Promptly implemented changes and added features to internal applications by coordinating with business users.',
        'Optimized SQL queries for various internal and external applications.',
        'Created standard Jenkins Pipelines for CI/CD for all applications cutting down configuration and maintenance time by 99%.',
        'Setup Kubernetes on-prem and created pipelines to build containers and deploy to Azure registry and Kubernetes cluster.',
        'Automated configuration tasks using Ansible.',
    ],
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(5),
    backgroundColor: theme.palette.background.default,
  },
  label: {
    fontWeight: '500',
    fontFamily: theme.typography.h1.fontFamily
  },
  workList: {
    paddingLeft: theme.spacing(7)
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography className={classes.label}>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <BindKeyboardSwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
        <Paper square elevation={0} >
          <ul className={classes.workList} key={step.label}>
            {step.work.map((desc) => 
                (
                    <li><Typography variant="body2">{desc}</Typography></li>
                )
            )}
          </ul>
        </Paper>
        ))}
      </BindKeyboardSwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;
