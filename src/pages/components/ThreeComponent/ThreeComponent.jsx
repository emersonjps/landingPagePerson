import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ThreeCompenent() {
  const canvasRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true, // Configura o fundo transparente
    });
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

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

    const loader = new GLTFLoader();

    let mixer;
    let robot;
    loader.load(
      "https://liaser.s3.sa-east-1.amazonaws.com/praticas/_general/models/buster_drone.glb",
      (gltf) => {
        const model = gltf.scene;
        model.position.copy(new THREE.Vector3(0, 0, 0));
        let scale = 1.3;
        model.scale.set(scale, scale, scale);
        model.position.y = 1
        model.rotation.x = 0.1
        scene.add(model);
        robot = model;
        robot.update = () => {
          robot.rotation.y += 0.005;
        };
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
      camera.updateProjectionMatrix();
      controls.update();
      if (robot) robot.update();
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
