import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';

function SpinRing({ position, color, speed = 0.4, scale = 1 }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * speed;
    ref.current.rotation.y += delta * speed * 0.6;
  });
  return (
    <Float speed={1.2} floatIntensity={0.8}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusGeometry args={[1, 0.04, 12, 64]} />
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.25} transparent opacity={0.7} />
      </mesh>
    </Float>
  );
}

function DriftOrb({ position, color, size = 0.35 }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
  });
  return (
    <mesh ref={ref} position={position} scale={size}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.3} transparent opacity={0.55} />
    </mesh>
  );
}

/**
 * Lightweight ambient 3D layer for section backgrounds.
 * variant: 'light' | 'dark'
 */
const AmbientScene = ({ variant = 'dark' }) => {
  const teal = '#14b8a6';
  const gold = '#c4a35a';
  const ink = variant === 'dark' ? '#94a3b8' : '#0f766e';

  return (
    <Canvas
      dpr={[1, 1.25]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent', pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 2, 3]} intensity={0.8} color={teal} />
      <SpinRing position={[-2.2, 0.8, -1]} color={teal} speed={0.35} scale={0.55} />
      <SpinRing position={[2.4, -0.6, -1.2]} color={gold} speed={0.28} scale={0.7} />
      <DriftOrb position={[-1.5, -0.4, 0]} color={teal} size={0.22} />
      <DriftOrb position={[1.8, 1, -0.5]} color={gold} size={0.18} />
      <DriftOrb position={[0.2, -1.2, 0.2]} color={ink} size={0.14} />
      <Sparkles
        count={28}
        scale={[7, 4, 3]}
        size={2}
        speed={0.25}
        color={variant === 'dark' ? '#14b8a6' : '#0f766e'}
        opacity={0.35}
      />
    </Canvas>
  );
};

export default AmbientScene;
