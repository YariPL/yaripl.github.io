import React from 'react';
import * as THREE from "./three.module.js";
const Background = () => {
	let camera, scene, renderer;
	camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.z = 1;

	// create scene
	scene = new THREE.Scene();

	let geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  let material = new THREE.MeshNormalMaterial();

  let mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);


	renderer = new THREE.WebGLRenderer({
		antialias: true
	});

	renderer.setClearColor(0xe6cbb2); // to have light background color
renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );


	window.addEventListener("resize", onWindowResize, false);
	animate();
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