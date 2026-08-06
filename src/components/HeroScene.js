import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Sparkles } from '@react-three/drei';

function TorusKnot() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.18;
    ref.current.rotation.y += delta * 0.26;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.65} floatIntensity={1.3}>
      <mesh ref={ref} position={[1.35, 0.35, 0]} scale={0.88}>
        <torusKnotGeometry args={[1, 0.28, 180, 28]} />
        <MeshDistortMaterial
          color="#14b8a6"
          attach="material"
          distort={0.35}
          speed={2}
          roughness={0.18}
          metalness={0.55}
          transparent
          opacity={0.88}
        />
      </mesh>
    </Float>
  );
}

function GlassOrb() {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.25 + 0.4;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={2} floatIntensity={1.4}>
      <mesh ref={ref} position={[-1.5, 0.4, 0.6]} scale={0.55}>
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial
          color="#e8eef8"
          metalness={0.1}
          roughness={0.05}
          transmission={0.65}
          thickness={1.2}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
}

function GoldRing() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.35;
    ref.current.rotation.z += delta * 0.15;
  });

  return (
    <mesh ref={ref} position={[-0.2, -0.3, 1.2]} scale={0.7}>
      <torusGeometry args={[1.1, 0.035, 16, 80]} />
      <meshStandardMaterial color="#c4a35a" metalness={0.85} roughness={0.22} />
    </mesh>
  );
}

function OrbitNodes() {
  const group = useRef();
  const nodes = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => {
        const angle = (i / 22) * Math.PI * 2;
        const radius = 2.55 + (i % 4) * 0.22;
        return {
          position: [
            Math.cos(angle) * radius,
            Math.sin(angle * 1.6) * 0.7,
            Math.sin(angle) * radius * 0.4,
          ],
          scale: 0.045 + (i % 5) * 0.018,
          color: i % 3 === 0 ? '#c4a35a' : i % 3 === 1 ? '#14b8a6' : '#0f766e',
        };
      }),
    []
  );

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.16;
      group.current.rotation.x = Math.sin(Date.now() * 0.0002) * 0.08;
    }
  });

  return (
    <group ref={group} position={[-0.4, 0.15, -0.5]}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position} scale={node.scale}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color={node.color} metalness={0.6} roughness={0.28} />
        </mesh>
      ))}
    </group>
  );
}

function FloatingCubes() {
  const group = useRef();
  const cubes = useMemo(
    () =>
      [
        { p: [2.4, 1.2, -1], s: 0.18, r: 0.4 },
        { p: [-2.2, -0.8, 0.5], s: 0.14, r: -0.3 },
        { p: [0.8, -1.3, 1.5], s: 0.12, r: 0.6 },
        { p: [-1.8, 1.4, -0.8], s: 0.1, r: 0.2 },
      ],
    []
  );

  useFrame((state) => {
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      child.rotation.x = state.clock.elapsedTime * (0.3 + i * 0.1);
      child.rotation.y = state.clock.elapsedTime * (0.25 + i * 0.08);
    });
  });

  return (
    <group ref={group}>
      {cubes.map((c, i) => (
        <mesh key={i} position={c.p} scale={c.s} rotation={[c.r, c.r, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={i % 2 ? '#14b8a6' : '#1c2740'}
            metalness={0.4}
            roughness={0.35}
            transparent
            opacity={0.75}
          />
        </mesh>
      ))}
    </group>
  );
}

function BlueprintGrid() {
  return (
    <mesh rotation={[-Math.PI / 2.35, 0, 0]} position={[0, -1.75, 0]}>
      <planeGeometry args={[20, 20, 28, 28]} />
      <meshBasicMaterial color="#64748b" wireframe transparent opacity={0.16} />
    </mesh>
  );
}

const HeroScene = () => {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0.45, 6.4], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 6, 3]} intensity={1.15} color="#f8fafc" />
      <pointLight position={[-3.5, 1.5, 2]} intensity={1.1} color="#14b8a6" />
      <pointLight position={[3, -1, 2]} intensity={0.55} color="#c4a35a" />
      <Sparkles count={48} scale={[8, 5, 4]} size={2.5} speed={0.35} color="#14b8a6" opacity={0.45} />
      <BlueprintGrid />
      <TorusKnot />
      <GlassOrb />
      <GoldRing />
      <OrbitNodes />
      <FloatingCubes />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.42} />
    </Canvas>
  );
};

export default HeroScene;
