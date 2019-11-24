import  SceneSubject  from './SceneSubject'
import * as THREE from 'three'
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import SceneManager from './SceneManager';

export class Cube implements SceneSubject{
    public cube: THREE.Object3D;
    public rotation: THREE.Vector3;
    public speed: THREE.Vector3;
    
    loadModel(modelPath) {
        this.loader.load(modelPath,  gltf => this.initLoad(gltf), undefined, function ( error ) {
            console.error( error );
        });
    }

    initLoad(gltf : GLTF){
        this.cube = gltf.scene.children[0]
        this.cube.scale.set(0.03, 0.03, 0.03);
        this.sceneManager.addSubject( this );
    }

    constructor(private sceneManager: SceneManager, private loader: GLTFLoader, private modelPath: string){
        if(modelPath){
            this.loadModel(modelPath);
        }

        this.rotation = new THREE.Vector3(0.1,0.1,0.1);
        this.speed = new THREE.Vector3(0.01,0.01,0.01);
    }

    update = () => {
        if(this.cube){
            //this.cube.position.x += this.speed.x;
             this.cube.position.y += this.speed.y;
             this.cube.rotation.x += this.rotation.x;
            // this.cube.position.z += this.speed.z;
            
        }
    }

    getSubject = () => {
        return this.cube;
    }
}