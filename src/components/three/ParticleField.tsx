import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 1500 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });
  useThree();

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const gold = new THREE.Color("#DAA520");
    const crimson = new THREE.Color("#8B0000");
    const cream = new THREE.Color("#FFF8DC");
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
      const r = Math.random();
      const c = r > 0.6 ? gold : r > 0.2 ? crimson : cream;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return [positions, colors];
  }, [count]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state) => {
    if (!points.current) return;
    const t = state.clock.getElapsedTime();
    points.current.rotation.y = t * 0.04;
    points.current.rotation.x = mouse.current.y * 0.15;
    points.current.rotation.z = mouse.current.x * 0.06;
    const pos = points.current.geometry.attributes.position.array as Float32Array;
    for (let i = 1; i < pos.length; i += 3) {
      pos[i] += Math.sin(t * 0.3 + i) * 0.0009;
      if (pos[i] > 12) pos[i] = -12;
    }
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticleField({ count }: { count?: number }) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-90">
      <Canvas camera={{ position: [0, 0, 8], fov: 70 }} gl={{ antialias: true, alpha: true }}>
        <Particles count={count ?? (isMobile ? 500 : 1800)} />
      </Canvas>
    </div>
  );
}
