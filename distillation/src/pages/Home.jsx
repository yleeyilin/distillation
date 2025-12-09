import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Loader from '../components/Loader'
import Model from '../models/animate'

const RotatingModel = (props) => {
  const modelRef = useRef()
  
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005 // Adjust speed here
    }
  })
  
  return (
    <group ref={modelRef}>
      <Model {...props} />
    </group>
  )
}

const Home = () => {
  return (
    <section className="relative w-full h-screen">
      <Canvas
        className="absolute inset-0 w-full h-full bg-transparent z-0"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <RotatingModel scale={0.04} position={[-0.15, 1.5, 0]}/>
          
          <OrbitControls enableZoom={false}/>
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home