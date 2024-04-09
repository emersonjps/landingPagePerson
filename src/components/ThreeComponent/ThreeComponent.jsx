import gsap from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ThreeCompenent() {
  const canvasRef = useRef();

  useEffect(() => {
    const lenght = {
      width: 500,
      height: 500,
    };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      lenght.width / lenght.height,
      0.1,
      1000
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(lenght.width, lenght.height);

    const light = new THREE.AmbientLight(0xffffff, 1); // 0.1 <- VALOR PADRÃO
    light.position.x = 1;
    light.position.y = 1;
    light.position.z = 1;
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    scene.add(directionalLight);
    directionalLight.position.x = 10;
    directionalLight.position.y = 9;
    directionalLight.position.z = 7;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const loader = new GLTFLoader();

    let mixer;
    let robot;
    loader.load(
      "/buster_drone.glb",
      (gltf) => {
        const model = gltf.scene;
        model.position.copy(new THREE.Vector3(0, 0, 0));
        let scale = 1.5;
        model.scale.set(scale, scale, scale);
        model.rotation.y = 5;
        scene.add(model);
        robot = model;
        gsap.to(cube.scale, { x: 0, y: 0, z: 0 });
        gsap.to(robot.rotation, {
          x: 0,
          y: 0,
          z: 0,
          ease: "elastic",
          duration: 5,
        });
        mixer = new THREE.AnimationMixer(model);
        const clips = gltf.animations;
        const clip = THREE.AnimationClip.findByName(clips, "Start_Liftoff");
        const action = mixer.clipAction(clip);
        action.play();
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    const clock = new THREE.Clock();
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    const animate = () => {
      if (mixer?.update) mixer.update(clock.getDelta());
      requestAnimationFrame(animate);
      cube.rotation.x += 0.05;
      cube.rotation.y += 0.05;
      camera.updateProjectionMatrix();
      controls.update();
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div>
      <canvas className="my_canvas" ref={canvasRef} />
    </div>
  );
}
