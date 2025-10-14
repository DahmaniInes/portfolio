import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, rotate }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const modelRef = useRef();
  const rotationDone = useRef(false); // éviter rotation multiple

  useEffect(() => {
    if (rotate && modelRef.current) {
      const targetRotation = modelRef.current.rotation.y + Math.PI * 2;
      const duration = 10000;
      const startTime = performance.now();
  
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        modelRef.current.rotation.y =
          modelRef.current.rotation.y * (1 - progress) + targetRotation * progress;
  
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          modelRef.current.rotation.y = targetRotation;
        }
      };
  
      requestAnimationFrame(animate);
    }
  }, [rotate]);
  

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        ref={modelRef}
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]} // rotation initiale
      />
    </mesh>
  );
};

const ComputersCanvas = ({ rotate }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} rotate={rotate} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
