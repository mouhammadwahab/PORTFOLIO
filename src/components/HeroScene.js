import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

/** Soft orbiting module — reads as a package / build artifact. */
function CodeModule({ position, color, scale = 1, speed = 1 }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.18 * speed;
    ref.current.rotation.y += delta * 0.26 * speed;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.55}
        roughness={0.4}
        metalness={0.35}
      />
    </mesh>
  );
}

/** Low-poly node — like a graph / service mesh point. */
function DevNode({ position, color }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = position[1] + Math.sin(t * 0.7) * 0.12;
    ref.current.rotation.y = t * 0.35;
  });

  return (
    <mesh ref={ref} position={position} scale={0.42}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.7}
        roughness={0.3}
        metalness={0.45}
      />
    </mesh>
  );
}

/** Thin ring — orbit / CI pipeline loop. */
function OrbitRing({ position, color }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.12;
    ref.current.rotation.z += delta * 0.2;
  });

  return (
    <mesh ref={ref} position={position} scale={0.9}>
      <torusGeometry args={[1.05, 0.035, 8, 48]} />
      <meshStandardMaterial color={color} roughness={0.45} metalness={0.5} transparent opacity={0.55} />
    </mesh>
  );
}

const HeroScene = () => (
  <Canvas
    dpr={1}
    frameloop="always"
    camera={{ position: [0, 0.2, 7.2], fov: 40 }}
    gl={{
      antialias: false,
      alpha: true,
      powerPreference: 'low-power',
      failIfMajorPerformanceCaveat: true,
    }}
    style={{ background: 'transparent' }}
  >
    <ambientLight intensity={0.7} />
    <directionalLight position={[3, 4, 2]} intensity={0.75} />
    <CodeModule position={[-1.55, 0.35, -0.2]} color="#0f5f52" scale={0.85} speed={0.85} />
    <CodeModule position={[1.7, -0.15, -0.5]} color="#14b8a6" scale={0.55} speed={1.15} />
    <OrbitRing position={[0.15, 0.4, -0.8]} color="#c4a35a" />
    <DevNode position={[-0.35, -0.55, 0.4]} color="#14b8a6" />
    <DevNode position={[1.05, 0.85, 0.1]} color="#c4a35a" />
  </Canvas>
);

export default HeroScene;
