import React, { Component } from 'react'
import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
 
function Thing({ vertices, color }) {
  return (
    <group ref={ref => console.log('we have access to the instance')}>
      <line>
        <geometry
          attach="geometry"
          vertices={vertices.map(v => new THREE.Vector3(...v))}
          onUpdate={self => (self.verticesNeedUpdate = true)}
        />
        <lineBasicMaterial attach="material" color="black" />
      </line>
      <mesh 
        onClick={e => console.log('click')} 
        onPointerOver={e => console.log('hover')} 
        onPointerOut={e => console.log('unhover')}>
        <octahedronGeometry attach="geometry" />
        <meshBasicMaterial attach="material" color="peachpuff" opacity={0.5} transparent />
      </mesh>
    </group>
  )
}
 

export default class Threee extends Component {
  render() {
    return (
      <div>
        <Canvas>
            <Thing vertices={[[-1, 0, 0], [0, 1, 0], [1, 0, 0], [0, -1, 0], [-1, 0, 0]]} />
        </Canvas>
      </div>
    )
  }
}
