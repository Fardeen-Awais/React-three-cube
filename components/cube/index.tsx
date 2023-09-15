'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import styles from './style.module.scss'
const CubeModel = () => {
  return (
    <div className={styles.main}>
        <Canvas>
            <ambientLight intensity={"2"}/>
            <Cube/>
        </Canvas>
    </div>
  )
}

function Cube() {
  return (
    <mesh>
        <boxGeometry args={["2.5","2.5","2.5"]}/> {/* This basically scale it up to 2.5x2.5x2.5  */}
        <meshStandardMaterial color={"orange"}/>  {/* This basically add color only visible when light apply on cube */}
    </mesh>
  )
}

export default CubeModel