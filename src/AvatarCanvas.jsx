import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/avatar.glb');
  return <primitive object={scene} scale={2.5} position={[0, -2.5, 0]} />;
};

const AvatarCanvas = () => {
  return (
    <div className="w-full h-[600px] relative z-20 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
          <Environment preset="city" />

          <Model />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AvatarCanvas;
