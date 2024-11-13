import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function VirtualCardMesh() {
  return (
    <Canvas style={{ height: "100%" }}>
      {/* <ambientLight intensity={Math.PI / 2} /> */}
      <directionalLight
        position={[2.5, 2.5, 2.5]}
        castShadow
        intensity={Math.PI * 1.1}
      />
      <mesh>
        <boxGeometry args={[3, 3, 0.5]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}
