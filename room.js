import * as THREE from './build/three.module.js';
import { GLTFLoader } from './src/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(innerWidth,innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

camera.position.set(5,0.35,10);

const light = new THREE.DirectionalLight( 0xFFFFFF, 3.5);
light.position.set( 200, 20, 10);
scene.add(light);

let room = new THREE.Object3D();
const loaderOne = new GLTFLoader().load(
    "./assets/room.glb",
    function(gltf) {
    room = gltf.scene;
    room.position.set(0,0,0);
    room.rotation.set(0, 0, 0); 
    room.scale.set(.3, .3, .3);
    scene.add(room);
    },
    undefined,
    function(error) {
    console.error(error);
    }
);

function animate() {

    requestAnimationFrame(animate);
    renderer.render( scene, camera );
   
}

animate();