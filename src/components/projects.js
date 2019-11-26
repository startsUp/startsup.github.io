import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { bindKeyboard } from 'react-swipeable-views-utils';
import { Tooltip } from '@material-ui/core';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const tutorialSteps = [
  {
    label: 'TrnTable | Host or Join collaborative music sessions using your Spotify Account.',
    link: 'https://trntable.live',
    techUsed: 'Node.js, NoSQL, Express, React, Javascript, CSS, HTTP, WebSockets, OAuth2, Spotify Web API',
    imgPath: '/trntable.png',
	},
	{
    label: 'NodeMessenger | Instant Text Messaging for the Web',
    link: 'https://github.com/startsUp/NodeMessenger',
    techUsed: 'React, Javascript, CSS, Firebase, Firestore, Node.js, NoSQL, HTTP, WebSockets',
    imgPath: '/nodeM.png',
	},
	{
    label: 'Olo | 2d touch screen game with custom made physics engine',
    link: 'https://github.com/startsup/lectureboard',
    techUsed: 'Java, JavaFX, Object Oriented Programming, KeyFrame Animations',
    imgPath: '/olo.png',
  },
  {
    label: 'LectureBoard | Host Interactive Classroom sessions with Whiteboard support.',
    link: 'https://github.com/startsup/lectureboard',
    techUsed: 'React, Javascript, CSS, Node.js, WebSockets, SVG, curve-fitting',
    imgPath: '/lecture.png',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
  },
  desc: {
		justifySelf: 'baseline'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(5),
    backgroundColor: theme.palette.background.default,
  },
  label: {
    fontWeight: '700',
    fontFamily: theme.typography.h1.fontFamily
  },
  imageContainer: {
		paddingLeft: theme.spacing(5),
		padding: theme.spacing(1),
		paddingRight: theme.spacing(3),
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    justifyItems: 'end'
	},
	buttonContainer: {
			position: 'relative'
	},
	button: {
		position: 'absolute',
		top: '2%',
		right: '2%',
		borderRadius: theme.shape.borderRadius,
		transform: 'translate(%, -50%)',
		msTransform: 'translate(-50%, -50%)',
		cursor: 'pointer'
	},
  img: {
    height: '200px',
		borderRadius: theme.shape.borderRadius,
    backgroundSize: 'cover',
    opacity: 0.4,
    display: 'block',
   
    backgroundPosition: '50% 50%'
	},
	techLabel: {
		fontFamily: theme.typography.h1.fontFamily,
		color: theme.palette.primary.main
	}	
}));

function Projects() {
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
          <Box className={classes.imageContainer} key={step.label}>
            <Typography variant="body2" className={classes.desc}>
                <b className={classes.techLabel}>Technologies Used:</b><br/>
                {step.techUsed}
            </Typography>
            {Math.abs(activeStep - index) <= 2 ? (
							<Box className={classes.buttonContainer}>
								<img className={classes.img} src={step.imgPath} alt={step.label} />
								<Paper>
									<a href={step.link}>
										<Tooltip title="View Project">
											
												<Icon className={classes.button}>launch</Icon>
										
										</Tooltip>
									</a>
									</Paper>
							</Box>
              
            ) : null}
          </Box>
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

export default Projects;
