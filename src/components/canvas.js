import React, { useEffect } from 'react';
import '../App.css'
import mainScene from '../threeJS/main'

function CanvasScene (){
  var threeContainer = null;
  useEffect(()=>{
	mainScene(threeContainer)
  }, [threeContainer])

  return (
	  <div id="canvas-div" ref={element => threeContainer = element}></div>
  );
}

export default CanvasScene
