

var scene = new THREE.Scene();
// Load Camera Perspektive
var camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set( 0 , 0 , 0);


// Load a Renderer
var renderer = new THREE.WebGLRenderer({ alpha: true });
//renderer.setClearColor( 0x3277a8 );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var controls = new THREE.OrbitControls( camera, renderer.domElement );
// Load Light
// Load the Orbitcontroller
			
// Load Light
var ambientLight = new THREE.AmbientLight( 0xcccccc );
scene.add( ambientLight );
			
var directionalLight = new THREE.DirectionalLight( 0xffffff );
directionalLight.position.set( 0, 1, 1 ).normalize();
scene.add( directionalLight );	

var loader = new THREE.GLTFLoader();
var orangePortal, bluePortal, cube, otherCube;

loader.load('model/portal-blue.glb', function ( gltf ) {

    bluePortal = gltf.scene.children[0]
    bluePortal.scale.set(1, 1, 1);
    bluePortal.position.set(3, 0, 0);
    bluePortal.rotation.y -= Math.PI / 2;
    scene.add( bluePortal );


}, undefined, function ( error ) {

	console.error( error );

});

loader.load('model/portal-orange.glb', function ( gltf ) {

    orangePortal = gltf.scene.children[0]
    orangePortal.scale.set(1, 1, 1);
    orangePortal.position.set(-3, 0, 0);
    orangePortal.rotation.y+= Math.PI / 2;
    scene.add( orangePortal );


}, undefined, function ( error ) {

	console.error( error );

});
loader.load('model/cube.glb', function ( gltf ) {

    cube = gltf.scene.children[0]
   
 
    cube.scale.set(0.05, 0.05, 0.05);
    var cube2 = cube.clone();
    
    scene.add( cube );
    scene.add( cube2 ); 
    
    console.log(scene);

}, undefined, function ( error ) {

	console.error( error );

});
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
//scene.add( cube );

camera.position.z = 15;
controls.update();
function animate() {
    requestAnimationFrame( animate );
    
    if(cube){
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
        // cube.rotation.z += 0.01;
        cube.position.x += 0.01;
    //   /  console.log(cube.position);
    }
    
    renderer.render( scene, camera );   
}
animate();

function onDocumentMouseMove( event ) {

    event.preventDefault();

    if ( isMouseDown ) {

        theta = - ( ( event.clientX - onMouseDownPosition.x ) * 0.5 )
                + onMouseDownTheta;
        phi = ( ( event.clientY - onMouseDownPosition.y ) * 0.5 )
              + onMouseDownPhi;

        phi = Math.min( 180, Math.max( 0, phi ) );

        camera.position.x = radious * Math.sin( theta * Math.PI / 360 )
                            * Math.cos( phi * Math.PI / 360 );
        camera.position.y = radious * Math.sin( phi * Math.PI / 360 );
        camera.position.z = radious * Math.cos( theta * Math.PI / 360 )
                            * Math.cos( phi * Math.PI / 360 );
        camera.updateMatrix();

    }

    mouse3D = projector.unprojectVector(
        new THREE.Vector3(
            ( event.clientX / renderer.domElement.width ) * 2 - 1,
            - ( event.clientY / renderer.domElement.height ) * 2 + 1,
            0.5
        ),
        camera
    );
    ray.direction = mouse3D.subSelf( camera.position ).normalize();

    interact();
    render();

}