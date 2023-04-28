import { OrbitControls, RenderTexture, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 100%;
`;

function Test() {
  return (
    <Container>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate={true} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial>
            <RenderTexture attach="map">
              <color attach="background" args={["pink"]} />
              <Text fontSize={3} color="#555">
                Olaa
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </Container>
  );
}

export default Test;
