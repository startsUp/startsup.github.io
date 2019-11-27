import React, { useEffect } from 'react';
import PropTypes, { element } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../App.css'
import mainScene from '../threeJS/main'

function CanvasScene (){
  var threeContainer = null;
  useEffect(()=>{
	mainScene(threeContainer)
  }, [threeContainer])

  return (
	  <div ref={element => threeContainer = element}>
		  
      </div>
  );
}

export default CanvasScene
