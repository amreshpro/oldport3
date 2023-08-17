

import React, { Suspense, useRef } from 'react'
import { Center, OrbitControls, useGLTF } from '@react-three/drei'
import FallbackLoader from './FallbackLoader'
import { Canvas } from '@react-three/fiber'

 function LaptopModel(props) {
  const { nodes, materials } = useGLTF('/glb/laptop.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.122, 40.245, -51.767]} rotation={[-0.554, 0, 0]} scale={[4.269, 5.129, 1]}>
        <mesh geometry={nodes['klapa_Material_#41_0'].geometry} material={materials.Material_41} position={[-11.875, -5.344, 0.108]} />
      </group>
      <mesh geometry={nodes['podstawa_Material_#28_0'].geometry} material={materials.Material_28} position={[-50.569, 1.532, 47.852]} rotation={[-Math.PI / 2, 0, 0]} scale={[4.269, 5.129, 1]} />
      <mesh geometry={nodes['Sphere002_Material_#42_0'].geometry} material={materials.Material_42} position={[61.864, 0.045, 62.738]} rotation={[Math.PI / 2, 0, 0]} scale={[0.931, 0.931, 0.284]} />
    </group>
  )
}

useGLTF.preload('/glb/laptop.glb')


const Laptop = () => {
  return (
    <Canvas
    shadows
    camera={{
      fov: 80,
      near: 1,
      far: 2000,
      position: [70,100,90],
    }}
  >
    <OrbitControls enableZoom={false} maxPolarAngle={5} minPolarAngle={1} />
    <ambientLight />
    <Suspense fallback={<FallbackLoader />}>
 
      <Center>
        <LaptopModel />
    
      </Center>
    </Suspense>
  </Canvas>
  )
}
export default Laptop