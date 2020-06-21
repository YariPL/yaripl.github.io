import React from 'react';
import * as THREE from "./three.module.js";




const Background = () => {
        let camera = new THREE.PerspectiveCamera(
          70,
          window.innerWidth / window.innerHeight,
          0.01,
          700
        );
        camera.position.z = 1;

        // create scene
        let scene = new THREE.Scene();

		// stars part
          let sphereTab = [];

          for (let i = 0; i < 500; i++) {
            // randRadius = Math.random()*30+10;
            let lumiereS = new THREE.MeshPhongMaterial({
              emissive: "#fff",
            });
            sphereTab.push(
              new THREE.Mesh(
                new THREE.SphereGeometry(Math.random() * 1, 20, 20),
                lumiereS
              )
            );
          }
          for (let i = 0; i < sphereTab.length; i++) {
            sphereTab[i].position.set(
              Math.random() * 600 - 300,
              Math.random() * 600 - 300,
              Math.random() * 600 - 300
            );
            scene.add(sphereTab[i]);
          }
		
		// sphere part
          let circle = new THREE.Object3D();
          let skelet = new THREE.Object3D();

          scene.add(circle);
          scene.add(skelet);

          circle.position.x = 0.53;
          skelet.position.x = 0.5;

          let geom = new THREE.IcosahedronGeometry(7, 1);
          let geom2 = new THREE.IcosahedronGeometry(15, 1);
          let mat = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            shading: THREE.FlatShading,
          });

          let mat2 = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            wireframe: true,
            side: THREE.DoubleSide,
          });

          let sphere1 = new THREE.Mesh(geom, mat);
          sphere1.scale.x = sphere1.scale.y = sphere1.scale.z = 0.026;
          circle.add(sphere1);

          let sphere2 = new THREE.Mesh(geom2, mat2);
          sphere2.scale.x = sphere2.scale.y = sphere2.scale.z = 0.02;
          skelet.add(sphere2);
        

        let light = new THREE.DirectionalLight(0xb3c6ff);
        light.position.set(22, 22, 22);
        scene.add(light);
        let light1 = new THREE.DirectionalLight(0xb3c6ff);
        light1.position.set(-22, 22, -4);
        scene.add(light1);

        let renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
        });

        renderer.setClearColor(0x131a3d, 1);

        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement); // append canvas to the body

        window.addEventListener("resize", onWindowResize, false); // resizer for 3d scene

        animate(); // loop for 3d scene

        function animate() {
          requestAnimationFrame(animate);
          var timer = 0.00001 * Date.now();
          for (var i = 0, il = sphereTab.length; i < il; i++) {
            var sfere = sphereTab[i];
            sfere.position.x = 400 * Math.sin(timer + i);
            // sfere.position.z= 500 * Math.sin( timer + i * 1.1 );
            sfere.position.z = 400 * Math.sin(timer + i * 1.1);
          }

          circle.rotation.x -= 0.002;
          circle.rotation.y -= 0.003;
          skelet.rotation.x -= 0.001;
          skelet.rotation.y += 0.002;

          renderer.render(scene, camera);
        }

        function onWindowResize() {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();

          renderer.setSize(window.innerWidth, window.innerHeight);
        }

        return null;
      };;

export default Background;