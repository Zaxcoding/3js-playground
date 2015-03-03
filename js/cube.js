var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.SphereGeometry(2, 16, 16);
var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);


var size = 10;
var step = 1;

var gridHelper = new THREE.GridHelper(size, step);
scene.add(gridHelper);
var axis = new THREE.AxisHelper(10);
axis.position.y = 0.01;
scene.add(axis);

camera.position.z = 10;
camera.position.y = 5;
camera.position.x = 5;

var render = function() {
    requestAnimationFrame(render);

    //   cube.rotation.x += 0.1;
    // cube.rotation.y += 0.1;
    camera.position.z += 0.01;


    renderer.render(scene, camera);
};

render();
