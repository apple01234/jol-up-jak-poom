import React, { useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import useCharacterStore from '../store/useCharacterStore';

interface ModelViewerProps {
  modelPath: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelPath }) => {
  const gltf = useGLTF(modelPath);
  const { actions, names } = useAnimations(gltf.animations, gltf.scene);
  const { currentAnimation, setCurrentAnimation } = useCharacterStore();

  useEffect(() => {
    if (names.length > 0 && !currentAnimation) {
      setCurrentAnimation(names[0]); // Set initial animation to the first one found
    }
  }, [names, currentAnimation, setCurrentAnimation]);

  useEffect(() => {
    if (currentAnimation) {
      // Stop all animations first
      names.forEach((name) => actions[name]?.stop());
      // Play the selected animation
      actions[currentAnimation]?.play();
    }
  }, [currentAnimation, actions, names]);

  return (
    <>
      <primitive object={gltf.scene} scale={1} castShadow receiveShadow />
      <div style={{ position: 'absolute', bottom: 20, left: 20, background: 'rgba(0,0,0,0.5)', padding: 10, borderRadius: 5, color: 'white' }}>
        <h3>Animations</h3>
        <select onChange={(e) => setCurrentAnimation(e.target.value)} value={currentAnimation || ''}>
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ModelViewer;
