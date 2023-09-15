'use client'
import React, { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader} from 'three/src/loaders/TextureLoader'
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
        mesh.current.rotation.x += delta * 0.75
        mesh.current.rotation.y += delta * 0.75
        mesh.current.rotation.z += delta * 0.75
      })

    const texture_1 = useLoader(TextureLoader,'/assets/1.jpg')
    const texture_2 = useLoader(TextureLoader,'/assets/2.jpg')
    const texture_3 = useLoader(TextureLoader,'/assets/3.jpg')
    const texture_4 = useLoader(TextureLoader,'/assets/4.jpg')
    const texture_5 = useLoader(TextureLoader,'/assets/5.jpg')
    const texture_6 = useLoader(TextureLoader,'/assets/6.jpg')

    
  return (
    <mesh ref={mesh}>
        <boxGeometry args={["2.5","2.5","2.5"]}/> {/* This basically scale it up to 2.5x2.5x2.5  */}
        <meshStandardMaterial map={texture_1} attach="material-0"/>  {/* This basically add color only visible when light apply on cube */}
        <meshStandardMaterial map={texture_2} attach="material-1"/>
        <meshStandardMaterial map={texture_3} attach="material-2"/>
        <meshStandardMaterial map={texture_4} attach="material-3"/>
        <meshStandardMaterial map={texture_5} attach="material-4"/>
        <meshStandardMaterial map={texture_6} attach="material-5"/>
    </mesh>
  )
}

export default CubeModel