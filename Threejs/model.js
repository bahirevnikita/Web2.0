
const div = document.querySelector('.threejs');
let wall;
let piramide;
let sphere;

document.forms[0].addEventListener('change', (e) => {
  piramide.material.color.set(e.target.value);
})
document.forms[1].addEventListener('change', (e) => {
  sphere.material.color.set(e.target.value);
})

document.getElementById("hemiLight").addEventListener('change', (e) => {
  hemiLight.visible = e.target.checked;
})
document.getElementById("directionalLight").addEventListener('change', (e) => {
  directionalLight.visible = e.target.checked;
})

window.addEventListener('resize', onWindowResize);

function onWindowResize() {

  camera.aspect = div.clientWidth / div.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(div.clientWidth, div.clientHeight);

}

const clock = new THREE.Clock();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, div.clientWidth / div.clientHeight, 0.1, 100);
camera.position.set(3, 0.7, 3);
cameraTarget = new THREE.Vector3(0, 0.4, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(div.clientWidth, div.clientHeight);

div.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;

// scene.background = new THREE.Color('gray');
//scene.fog = new THREE.Fog('gray', 1, 5);
// scene.castShadow = true;
// scene.receiveShadow = true;


const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
hemiLight.position.set(0, 200, 0);
scene.add(hemiLight);

const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(25, 25, 25);
directionalLight.castShadow = true;

directionalLight.shadow.mapSize.width = 2000; // default
directionalLight.shadow.mapSize.height = 2000; // default
directionalLight.shadow.camera.top = 10;
directionalLight.shadow.camera.bottom = - 10;
directionalLight.shadow.camera.left = - 10;
directionalLight.shadow.camera.right = 10;
scene.add(directionalLight);

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(4000, 4000),
  new THREE.MeshPhongMaterial({ color: 0x808080, dithering: true })
);
plane.rotation.x = - Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

// //Пункт 4
const wallBG = new THREE.BufferGeometry();
// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
const vertices = new Float32Array( [
	// 0.0, -1.0,  -1.0,
	// 0.0, -1.0,  1.0,
	// 0.0,  1.0,  1.0,

	// 0.0,  1.0,  1.0,
	// 0.0,  1.0,  -1.0,
	// 0.0, -1.0,  -1.0,

	0.0,  1.0,  1.0,
  0.0, -1.0,  1.0,
  0.0, -1.0,  -1.0,

	0.0, -1.0,  -1.0,
  0.0,  1.0,  -1.0,
  0.0,  1.0,  1.0
] );

// itemSize = 3 because there are 3 values (components) per vertex
wallBG.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
wallBG.computeVertexNormals();
const material = new THREE.MeshPhongMaterial( { color: 0x808080, side:THREE.DoubleSide} );
wall = new THREE.Mesh( wallBG, material );
wall.receiveShadow = true;
wall.castShadow = true;
scene.add(wall);
wall.translateX(-0.5);
wall.scale.set(1.2, 1.2, 1.2);

//Пункт 5 Сфера 
const sphereGeometry = new THREE.SphereGeometry( 0.5, 32, 32 );
const sphereMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.castShadow = true; //default is false
sphere.receiveShadow = true; //default
scene.add( sphere );
sphere.translateZ(0.5);
sphere.translateY(0.25);
sphere.scale.set(0.5, 0.5, 0.5);

//Пирамида
const piramideBG = new THREE.BufferGeometry();
// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
const verticesP = new Float32Array( [
	
-1.0, 0.0, -1.0,
0.0, 2.0, 0.0, 
1.0, 0.0, -1.0,

1.0, 0.0, -1.0,
0.0, 2.0, 0.0, 
1.0, 0.0, 1.0,

-1.0, 0.0, 1.0,
0.0, 2.0, 0.0, 
-1.0, 0.0, -1.0,

1.0, 0.0, 1.0,
0.0, 2.0, 0.0,
-1.0, 0.0, 1.0

] );
piramideBG.setAttribute( 'position', new THREE.BufferAttribute( verticesP, 3 ) );
const materialP = new THREE.MeshPhongMaterial( { color: 0x0000ff } ); //, side:THREE.DoubleSide
piramideBG.computeVertexNormals();
piramide = new THREE.Mesh( piramideBG, materialP );
piramide.castShadow = true;
piramide.receiveShadow = true;
scene.add(piramide);
piramide.scale.set(0.3, 0.3, 0.3);
piramide.translateZ(-0.5);


camera.position.z = 5;

function animate() {

  requestAnimationFrame(animate);

  render();

}

function render() {

  const elapsedTime = clock.getElapsedTime()

  //camera.position.x =Math.cos(elapsedTime * 0.5) * 2;
  camera.position.z =Math.sin(elapsedTime * 0.5) * 2;
  //camera.position.y = 0.5


  camera.lookAt(cameraTarget);

  renderer.render(scene, camera);

}

animate();