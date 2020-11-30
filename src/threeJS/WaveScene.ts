import  SceneSubject  from './SceneSubject'
import SceneManger from './SceneManager'
import { Wave } from './Wave';

export default class WaveScene{

    private wave: Wave;

    constructor(private sceneManager: SceneManger){
        const scene = sceneManager.getScene()        
        this.wave = new Wave(sceneManager);
    }

}