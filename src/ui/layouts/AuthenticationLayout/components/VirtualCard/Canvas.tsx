import { Canvas } from "@react-three/fiber";
import VirtualCardMesh from "./Mesh";

export default function VirtualCardCanvas() {
  return (
    <Canvas style={{ height: "400px" }}>
      <ambientLight />
      <VirtualCardMesh />
    </Canvas>
  );
}
