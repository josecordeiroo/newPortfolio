import React from "react";
import {PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";

function Cube() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 2]} />
          <color attach="background" args={["#8e03ff"]} />
          <Text fontSize={1} color="black">
            Olaa
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}

export default Cube;
