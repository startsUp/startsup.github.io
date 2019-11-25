import  SceneSubject  from './SceneSubject'
import * as THREE from 'three'
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import SceneManager from './SceneManager';

export class Pot implements SceneSubject{
    public pot: THREE.Object3D;
    public rotation: THREE.Vector3;

    loadModel(modelPath) {
        this.loader.load(modelPath,  gltf => this.initLoad(gltf), undefined, function ( error ) {
            console.error( error );
        });
    }

    initLoad(gltf : GLTF){
        this.pot = gltf.scene.children[0]
        this.pot.scale.set(0.03, 0.03, 0.03);
       // this.pot.rotation.x  = Math.PI/18;
        this.sceneManager.addSubject( this );
    }

    constructor(private sceneManager: SceneManager, private loader: GLTFLoader, private modelPath: string){
        if(modelPath){
            this.loadModel(modelPath);
        }

        this.rotation = new THREE.Vector3(0.01,0.01,0.01);
    }

    update = () => {
        if(this.pot){
             this.pot.rotation.z += this.rotation.z;
        }
    }

    getSubject = () => {
        return this.pot;
    }
}