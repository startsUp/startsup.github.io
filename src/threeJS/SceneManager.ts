import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three'
// import { Cube } from './cube.ts'
// import { Portal } from './portal.ts'
// import cubeModel from '../models/cube.glb'
// import bluePortal from '../models/portal-blue.glb'
// import orangePortal from '../models/portal-orange.glb' 
import SceneSubject from './SceneSubject';

export default class SceneManager {

    private canvas: any;
    private scene: THREE.Scene;
    private clock: THREE.Clock;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.Renderer;
    private loader: GLTFLoader;
    private sceneSubjects: SceneSubject[];

    constructor(canvas: any){
        this.clock = new THREE.Clock();
        this.canvas = canvas;

        const screenMetaData = {
            width: canvas.width,
            height: canvas.height,
            canvas: canvas
        }
        
        this.scene = this.buildScene();
        this.renderer = this.buildRender(screenMetaData);
        this.camera = this.buildCamera(screenMetaData);
        this.loader = this.getModelLoader();
    }
    
   // const sceneSubjects = createSceneSubjects(scene, loader);

    buildScene = () => {
        const scene = new THREE.Scene();
        var ambientLight = new THREE.AmbientLight( 0xcccccc );
        scene.add( ambientLight );
                    
        var directionalLight = new THREE.DirectionalLight( 0xffffff );
        directionalLight.position.set( 0, 1, 1 ).normalize();
        scene.add( directionalLight );	

        return scene;
    }

    getScene = () => {
        return this.scene;
    }
    getCamera = () => {
        return this.camera;
    }

    buildRender = ({ width, height, canvas }) => {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); 
        const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);

        renderer.gammaInput = true;
        renderer.gammaOutput = true; 

        return renderer;
    }

    buildCamera = ({ width, height }) => {
        const aspectRatio = width / height;
        const fieldOfView = 60;
        const nearPlane = 1;
        const farPlane = 1000; 
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        camera.position.set( 0 , 0 , 0);
        camera.position.z = 15;
    
        return camera;
    }

    // createSceneSubjects = (scene, loader) => {
    //     // TODO: Export this function so main controller can control the initial load
    //     const sceneSubjects = [
    //         new Cube(scene, loader, cubeModel),
    //         new Portal(scene, loader, bluePortal, {
    //             scale: new THREE.Vector3(0.5,0.5,0.5),
    //             position: new THREE.Vector3(-15, 0, 0),
    //             rotation: new THREE.Vector3(0, Math.PI/1.5, 0),
    //         }),
    //         new Portal(scene, loader, orangePortal, {
    //             scale: new THREE.Vector3(0.5,0.5,0.5),
    //             position: new THREE.Vector3(15, 0, 0),
    //             rotation: new THREE.Vector3(0, -Math.PI/1.5,0),
    //         })
    //     ];

    //     return sceneSubjects;
    // }
    
    getModelLoader = () => {
        return new GLTFLoader();
    }

    update = () => {
        const elapsedTime = this.clock.getElapsedTime();
        if(this.sceneSubjects){
            for(let i=0; i<this.sceneSubjects.length; i++)
        	this.sceneSubjects[i].update(elapsedTime);

            this.renderer.render(this.scene, this.camera);
        }
        
    }

    addSubjects = (sceneSubjects) => {
        sceneSubjects.forEach(subject => {
			this.scene.add(subject);
        })
        this.sceneSubjects = [...this.sceneSubjects, sceneSubjects]
    }

    onWindowResize = () => {
        const { width, height } = this.canvas;


        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        
        this.renderer.setSize(width, height);
    }
}