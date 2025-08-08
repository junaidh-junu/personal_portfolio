import { OrbitControls, PerformanceMonitor, AdaptiveDpr } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";

import Computer from "./Computer";

const ContactExperience = () => {
  const isMobile = useMemo(() =>
    typeof window !== "undefined" && window.matchMedia && window.matchMedia("(max-width: 640px)").matches,
  []);

  return (
    <Canvas
      shadows={!isMobile}
      camera={{ position: [0, 3, 7], fov: 45 }}
      dpr={isMobile ? [1, 1.25] : [1, 2]}
      gl={{ antialias: !isMobile, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.5} color="#fff4e6" />

      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

      {!isMobile && (
        <directionalLight
          position={[5, 9, 1]}
          castShadow
          intensity={2.5}
          color="#ffd9b3"
        />
      )}

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#a46b2d" />
        </mesh>
      </group>

      <group scale={0.03} position={[0, -1.49, -2]} castShadow={!isMobile}>
        <Computer />
      </group>

      <PerformanceMonitor onDecline={() => {}} />
      <AdaptiveDpr pixelated />
    </Canvas>
  );
};

export default ContactExperience;
