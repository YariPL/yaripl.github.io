import React from 'react';
import * as THREE from "./three.module.js";
const Background = () => {
	let camera = new THREE.PerspectiveCamera(
    	70,
    	window.innerWidth / window.innerHeight,
    	0.01,
    	10
  	);
  	camera.position.z = 1;

	// create scene
	let scene = new THREE.Scene();

	let geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
	let material = new THREE.MeshNormalMaterial();

	let mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);


	let renderer = new THREE.WebGLRenderer({
		antialias: true
	});

	renderer.setClearColor(0x273043); // to have light background color
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement ); // append canvas to the body

	window.addEventListener("resize", onWindowResize, false); // resizer for 3d scene

	animate(); // loop for 3d scene
	
	function animate() {
		requestAnimationFrame(animate);

		mesh.rotation.x += 0.01;
		mesh.rotation.y += 0.02;

		renderer.render(scene, camera);
	}


	function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);
	}
	/* return(
		<div id="canvasBack">
			<canvas id="canvasBackCanvas" />
		</div>
	)   */
	return null;
};

export default Background;