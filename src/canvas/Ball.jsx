import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {

  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import FallbackLoader from "./FallbackLoader";


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.y += 0.1;
    boxRef.current.rotation.x += 0.1;
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={1.25} />
      {/* <directionalLight position={[0, 0, 0.05]} /> */}
      <mesh castShadow receiveShadow scale={2.75}  ref={boxRef}     rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25} >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          // color={"red"}
          map={decal}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        /> */}
        <boxGeometry
           position={[891, 341,100]}
           rotation={[2 * Math.PI, 0, 6.25]}
           scale={1}
       
           flatShading
        
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<FallbackLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
