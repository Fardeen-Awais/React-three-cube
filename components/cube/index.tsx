'use client'
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import styles from './style.module.scss'
const CubeModel = () => {
  return (
    <div className={styles.main}>
        <Canvas>
            <ambientLight intensity={"2"}/>
            <directionalLight position={[2,1,1]}/>
            <Cube/>
        </Canvas>
    </div>
  )
}

function Cube() {

    const mesh = useRef()
    //* This hook allows you to execute code on every rendered frame, like running effects, updating controls, and so on.
    useFrame((state:any, delta:any) => { 
        mesh.current.rotation.x += delta * 0.25
        mesh.current.rotation.y += delta * 0.25
        mesh.current.rotation.z += delta * 0.25
      })

  return (
    <mesh ref={mesh}>
        <boxGeometry args={["2.5","2.5","2.5"]}/> {/* This basically scale it up to 2.5x2.5x2.5  */}
        <meshStandardMaterial color={"orange"}/>  {/* This basically add color only visible when light apply on cube */}
    </mesh>
  )
}

export default CubeModel