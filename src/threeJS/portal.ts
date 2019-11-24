import  SceneSubject  from './SceneSubject'
import * as THREE from 'three'
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import SceneManager from './SceneManager'

export class Portal implements SceneSubject{
    public portal: THREE.Object3D;
    
    loadModel(modelPath) {
        this.loader.load(modelPath,  gltf => this.initLoad(gltf), undefined, function ( error ) {
            console.error( error );
        });
    }

    initLoad(gltf : GLTF){
        this.portal = gltf.scene.children[0]
        if(this.initOptions){
            var {x, y, z} = this.initOptions.scale;
            this.portal.scale.set(x,y,z);

            var {x, y, z} = this.initOptions.position;
            this.portal.position.set(x,y,z);

            var {x, y, z} = this.initOptions.rotation;
            this.portal.rotation .set(x,y,z);
        }
        this.sceneManager.addSubject( this );
        
    }

    constructor(private sceneManager: SceneManager, 
                private loader: GLTFLoader, 
                private modelPath: string, 
                protected initOptions: {scale: THREE.Vector3,
                                        position: THREE.Vector3,
                                        rotation: THREE.Vector3}){

        if(modelPath){
            this.loadModel(modelPath);
        }
    }

    update = () => {
        
    }

    getSubject = () => {
        return this.portal;
    }
}