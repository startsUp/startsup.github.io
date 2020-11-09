import  SceneSubject  from './SceneSubject'
import SceneManger from './SceneManager'
import * as THREE from 'three'
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Portal } from './portal';
import { Cube } from './cube';
import blue from '../models/portal-blue.glb';
import orange from '../models/portal-orange.glb';
import cube from '../models/cube.glb';

export default class PortalScene{

    private bluePortal: SceneSubject;
    private orangePortal: SceneSubject;
    private cube: SceneSubject;

    constructor(private sceneManager: SceneManger){
        const scene = sceneManager.getScene()
        const loader = sceneManager.getModelLoader()

        this.bluePortal = new Portal(sceneManager, loader, blue,
        {
            scale: new THREE.Vector3(0.5,0.5,0.5),
            position: new THREE.Vector3(0, 0, 0),
            rotation: new THREE.Vector3(0, 0, 0),
        })

        this.orangePortal = new Portal(sceneManager, loader, orange,
        {
            scale: new THREE.Vector3(0.5,0.5,0.5),
            position: new THREE.Vector3(0, 0, 0),
            rotation: new THREE.Vector3(0, 0, -Math.PI/1.5),
        })
        
        this.cube = new Cube(sceneManager, loader, cube);

        
    }

}