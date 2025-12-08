import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

const Home = () => {
  return (
    <section className="relative w-full h-screen">
      <script type="module" src="./animate.js"></script>
      <Canvas
        className="absolute inset-0 w-full h-full bg-transparent z-0"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader/>}>

        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home