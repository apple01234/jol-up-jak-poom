import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SidePanel from './SidePanel';
import ModelViewer from '../ModelViewer';

const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-[--color-background] text-[--color-text-primary] font-sans overflow-hidden">
      {/* Left Section: 3D Viewer */}
      <div className="relative w-3/5 h-full bg-gradient-to-br from-black to-gray-900">
        <Canvas camera={{ position: [0, 1, 5], fov: 50 }} shadows>
          <ambientLight intensity={0.8} />
          <directionalLight 
            position={[5, 10, 7.5]} 
            intensity={1.5} 
            castShadow 
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <Suspense fallback={null}>
            <ModelViewer modelPath="/3d-model/eyepatch_kimono.glb" />
          </Suspense>
          <OrbitControls />
        </Canvas>
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>
        {/* Accent Line */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[--color-accent] opacity-50"></div>
      </div>

      {/* Right Section: Side Panel */}
      <div className="w-2/5 h-full bg-[--color-background] border-l border-[--color-border] shadow-lg shadow-black/20 flex flex-col">
        <SidePanel />
      </div>
    </div>
  );
};

export default MainLayout;