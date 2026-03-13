 import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";


import EnergyMaterial from "./EnergyShaderMaterial";

import AtmosphereMaterial from "./AtmosphereShaderMaterial";

function Core({ energy, isMobile }) {
  const materialRef = useRef();
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (materialRef.current) {
      materialRef.current.uTime = t;
      materialRef.current.uEnergy = energy / 100;
    }

    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0015;
      meshRef.current.rotation.x = Math.sin(t * 0.25) * 0.08;
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={isMobile ? 0.7 : 0.8}
    >
      <icosahedronGeometry args={[1.6, 64]} />
      <energyMaterial ref={materialRef} />
    </mesh>
  );
}

function Atmosphere({ energy, isMobile }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.uTime = clock.getElapsedTime();
      ref.current.uEnergy = energy / 100;
    }
  });

  return (
    <mesh
      scale={isMobile ? 0.9 : 1.05}
    >
      <sphereGeometry args={[1.6, 64, 64]} />
      <atmosphereMaterial
        ref={ref}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function EnergyCore3D({ energy }) {

  const isMobile = window.innerWidth < 768;

  const cameraSettings = isMobile
    ? { position: [0, 0, 9], fov: 60 }
    : { position: [0, 0, 5.5], fov: 50 };

  const bloomSettings = isMobile
    ? {
        intensity: 1.2,
        luminanceThreshold: 0.12,
        luminanceSmoothing: 0.8,
      }
    : {
        intensity: 2.2,
        luminanceThreshold: 0.05,
        luminanceSmoothing: 0.6,
      };

  return (
    <div
      style={{
        height: "100%",
        background:
          "radial-gradient(circle at center, #0f2e26 0%, #04100c 100%)",
        borderRadius: "28px",
        overflow: "hidden",
      }}
    >
      <Canvas
        camera={cameraSettings}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.25} />
        <pointLight position={[3, 3, 5]} intensity={1.8} />

        <Core energy={energy} isMobile={isMobile} />
        <Atmosphere energy={energy} isMobile={isMobile} />

        <Environment preset="studio" />

        <EffectComposer>
          <Bloom {...bloomSettings} />
        </EffectComposer>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}