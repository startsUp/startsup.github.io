import  SceneSubject  from './SceneSubject'
import * as THREE from 'three'
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import SceneManager from './SceneManager';

export class PotStand implements SceneSubject{
    public stand: THREE.Object3D;

    loadModel(modelPath) {
        this.loader.load(modelPath,  gltf => this.initLoad(gltf), undefined, function ( error ) {
            console.error( error );
        });
    }

    initLoad(gltf : GLTF){
        this.stand = gltf.scene.children[0]
        this.stand.scale.set(0.03, 0.03, 0.03);
        this.stand.position.set(0, -0.5, 0);
        this.sceneManager.addSubject( this );
    }

    constructor(private sceneManager: SceneManager, private loader: GLTFLoader, private modelPath: string){
        if(modelPath){
            this.loadModel(modelPath);
        }
    }
    update = () => {}
    getSubject = () => {
        return this.stand;
    }
}