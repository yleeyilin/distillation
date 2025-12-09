import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Loader from '../components/Loader'
import Model from '../models/animate'

const Home = () => {
  return (
    <section className="relative w-full h-screen">
      <Canvas
        className="absolute inset-0 w-full h-full bg-transparent z-0"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          <Model scale={0.05}/>
          
          <OrbitControls />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home