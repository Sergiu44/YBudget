import {
  Center,
  RoundedBox,
  Text3D,
  GradientTexture,
  MeshDistortMaterial,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function VirtualCardMesh() {
  const cardRef = useRef<any>(null);

  useFrame(({ clock }) => {
    if (cardRef.current) {
      cardRef.current.rotation.z = Math.sin(clock.getElapsedTime() - 1) / 10;
      cardRef.current.position.y = Math.sin(clock.getElapsedTime() + 1) / 4;
    }
  });

  return (
    <mesh ref={cardRef}>
      <RoundedBox bevelSegments={100} radius={0.1} args={[8, 4, 0.2]}>
        <Center>
          <Text3D font="/pop.json" size={0.5}>
            YBudget
            <meshNormalMaterial />
          </Text3D>

          <Text3D font="/pop.json" size={0.2}>
            test
            <meshNormalMaterial />
          </Text3D>
        </Center>
        {/* <meshPhongMaterial color="white">
          <GradientTexture stops={[0, 1]} colors={["purple", "white"]} />
        </meshPhongMaterial> */}
      </RoundedBox>
    </mesh>
  );
}
