import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

/** Lightweight hero accent — one mesh, no sparkles/controls/distort. */
function AccentMesh() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.2;
    ref.current.rotation.y += delta * 0.28;
  });

  return (
    <mesh ref={ref} position={[1.1, 0.15, 0]} scale={0.95}>
      <torusKnotGeometry args={[1, 0.28, 64, 12]} />
      <meshStandardMaterial
        color="#14b8a6"
        roughness={0.35}
        metalness={0.4}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

function SoftRing() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * 0.15;
  });
  return (
    <mesh ref={ref} position={[-1.2, 0.2, -0.4]} scale={0.85}>
      <torusGeometry args={[1, 0.04, 8, 48]} />
      <meshStandardMaterial color="#c4a35a" roughness={0.4} metalness={0.55} transparent opacity={0.65} />
    </mesh>
  );
}

const HeroScene = () => {
  return (
    <Canvas
      dpr={1}
      frameloop="always"
      camera={{ position: [0, 0.3, 6.5], fov: 42 }}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: 'low-power',
        failIfMajorPerformanceCaveat: true,
      }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 5, 2]} intensity={0.9} />
      <AccentMesh />
      <SoftRing />
    </Canvas>
  );
};

export default HeroScene;
