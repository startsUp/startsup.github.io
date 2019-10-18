// import React, { Component } from 'react'
// import resume from '../res/Shardool_Resume.pdf'

// const NavBar = props => (
//     <div className='nav'>
//         <ul className='links'>
//         <li>
//             <a href='#Home'>Home</a>
//         </li>
//         <li>
//             <a href='#Projects'>Projects</a>
//         </li>
//         <li>
//             <a href='#Experience'>Experience</a>
//         </li>
//         <li>
//             <a href={resume} download>Resume</a>
//         </li>
        
//         </ul>
//     </div>
// )
// export default NavBar


import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Experience" href="#Experience" {...a11yProps(0)} />
          <LinkTab label="Projects" href="#Projects" {...a11yProps(1)} />
          <LinkTab label="Interests" href="#Interests" {...a11yProps(2)} />
          <LinkTab label="Resume" href="" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
     
    </div>
  );
}