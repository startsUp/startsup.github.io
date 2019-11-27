import  SceneSubject  from './SceneSubject'
import SceneManger from './SceneManager'
import * as THREE from 'three'
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Pot } from './pot';
import cube from '../models/pot.glb';
import stand from '../models/pot-stand.glb';
import { PotStand } from './potStand';

export default class RotatingPotScene{

    private pot: SceneSubject;
    private stand: SceneSubject;
    constructor(private sceneManager: SceneManger){
        const scene = sceneManager.getScene()
        const loader = sceneManager.getModelLoader()

        this.pot = new Pot(sceneManager, loader, cube);
        this.stand = new PotStand(sceneManager, loader, stand);
    }

}