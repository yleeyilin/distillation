import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Loader from '../components/Loader'
import Model from '../models/animate'
import { BackgroundBeamsWithCollision } from '../components/ui/background-beams-with-collision'
import { EncryptedText } from '../components/ui/encrypted-text'

const RotatingModel = (props) => {
  const modelRef = useRef()
  
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005
    }
  })
  
  return (
    <group ref={modelRef}>
      <Model {...props} />
    </group>
  )
}

const Home = () => {
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    const totalDelay = 1200
    const timer = setTimeout(() => setShowCursor(true), totalDelay)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative w-full h-screen">
      {/* Mobile home animation */}
      <BackgroundBeamsWithCollision>
      <Canvas
        className="absolute inset-0 w-full h-full bg-transparent z-0"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <RotatingModel scale={0.05} position={[-0.05, 0, 0]}/>
          <OrbitControls enableZoom={false}/>
        </Suspense>
      </Canvas>
      </BackgroundBeamsWithCollision>

      {/* Intro text */}
      <p className="mx-auto max-w-lg py-20 text-6xl text-center">
        <EncryptedText
          text="hi,"
          encryptedClassName="text-neutral-500"
          revealedClassName="dark:text-white text-black"
          revealDelayMs={50}
        />{" "}

        <EncryptedText
          text="yilin"
          encryptedClassName="text-neutral-500"
          revealedClassName="bg-clip-text text-transparent bg-linear-to-r from-blue-700 to-green-700 font-bold"
          revealDelayMs={150}
        />{" "}

        <EncryptedText
          text="here."
          encryptedClassName="text-neutral-500"
          revealedClassName="dark:text-white text-black"
          revealDelayMs={250}
        />
        {showCursor && (<span className="ml-1 inline-block w-[0.05em] h-[0.9em] bg-black dark:bg-white animate-pulse"></span>)}
      </p>

    </section>
  )
}

export default Home