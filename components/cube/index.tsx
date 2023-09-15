'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import styles from './style.module.scss'
const CubeModel = () => {
  return (
    <div className={styles.main}>
        <Canvas>
            <Cube/>
        </Canvas>
    </div>
  )
}

function Cube() {
  return (
    <mesh>
        <boxGeometry/>
    </mesh>
  )
}

export default CubeModel