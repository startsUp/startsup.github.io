import SceneManager from './SceneManager';
import * as THREE from 'three';
import PortalScene from './portalScene';

export default containerElement => {
  const canvas = createCanvas(document, containerElement);
  const sceneManager = new SceneManager(canvas);


	var camera = sceneManager.getCamera();
  var plane = new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, 1));
  var raycaster = new THREE.Raycaster();
	var edge = new THREE.Vector2();
	var edgePoint = new THREE.Vector3();
	const createScene = new PortalScene();
	const LEFT_EDGE = {x: -1, y: 0};
	const RIGHT_EDGE = {x: 1, y: 0};
	var btnMove = document.getElementById('btnMove');

  var box = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), new THREE.MeshLambertMaterial({
    color: "green"
		}));
	sceneManager.getScene().add(box);

	btnMove.addEventListener("click", onClick, false);
	
	function onClick(){
	edge.set(RIGHT_EDGE.x, RIGHT_EDGE.y); // NDC of the bottom-left corner
  raycaster.setFromCamera(edge, camera);
  raycaster.ray.intersectPlane(plane, edgePoint);
  box.position.copy(edgePoint)
    .add(new THREE.Vector3(1, 1, -3));
	}


  bindEventListeners();
  render();
	
  function createCanvas(document, containerElement) {
    const canvas = document.createElement('canvas');
    containerElement.appendChild(canvas);
    return canvas;
  }

  function bindEventListeners() {
    window.onresize = resizeCanvas;
    resizeCanvas();
  }
  
  function resizeCanvas() {
    canvas.style.width = '100%';
    canvas.style.height= '100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    sceneManager.onWindowResize();
  }

  function render(time) {
    requestAnimationFrame(render);
    sceneManager.update();
  }
}