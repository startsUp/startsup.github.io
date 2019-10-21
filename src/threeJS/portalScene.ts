import  SceneSubject  from './SceneSubject'
import SceneManger from './SceneManager'
import * as THREE from 'three'
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

export default class PortalScene{

    constructor(private threeScene: THREE.Scene, private sceneManage: SceneManger){
        
    }

}