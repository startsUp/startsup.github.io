import  SceneSubject  from './SceneSubject'
import * as THREE from 'three'
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import SceneManager from './SceneManager';

export class Wave implements SceneSubject{
    public wave: THREE.Object3D;
    public rotation: THREE.Vector3;
    public speed: THREE.Vector3;

    generatePointCloudGeometry( color, width, length ) {

      const geometry = new THREE.BufferGeometry();
      const numPoints = width * length;

      const positions = new Float32Array( numPoints * 3 );
      const colors = new Float32Array( numPoints * 3 );

      let k = 0;

      for ( let i = 0; i < width; i ++ ) {

        for ( let j = 0; j < length; j ++ ) {

          const u = i / width;
          const v = j / length;
          const x = u - 0.5;
          const y = ( Math.cos( u * Math.PI * 4 ) + Math.sin( v * Math.PI * 8 ) ) / 20;
          const z = v - 0.5;

          positions[ 3 * k ] = x;
          positions[ 3 * k + 1 ] = y;
          positions[ 3 * k + 2 ] = z;

          const intensity = ( y + 0.1 ) * 5;
          colors[ 3 * k ] = color.r * intensity;
          colors[ 3 * k + 1 ] = color.g * intensity;
          colors[ 3 * k + 2 ] = color.b * intensity;

          k ++;

        }

      }

      geometry.setAttribute('position', new THREE.BufferAttribute( positions, 3 ) );
      geometry.setAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
      geometry.computeBoundingBox();

      return geometry;
    }

    generatePointcloud( color, width, length ) {
      const threshold = 0.1;
			const pointSize = 0.05;
      const geometry = this.generatePointCloudGeometry( color, width, length );
      const material = new THREE.PointsMaterial( { size: pointSize, color: 0xff44ff } );

      return new THREE.Points( geometry, material );

    }

    constructor(private sceneManager: SceneManager){
      const scene = sceneManager.getScene()
      const width = 80;
			const length = 160;
      const pcBuffer = this.generatePointcloud( new THREE.Color( 107, 0, 168 ), width, length );
      pcBuffer.scale.set( 10, 5, 10);
      pcBuffer.position.set( 0, 0, 0);
      scene.add( pcBuffer );
      this.wave = pcBuffer
      
    }

    getSubject(): THREE.Object3D {
      return this.wave
    }

    update = () => {
      // update point cloud wave
      // console.log(this.wave.position)
    }
}