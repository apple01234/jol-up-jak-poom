import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import ModelViewer from './components/ModelViewer';
import useCharacterStore from './store/useCharacterStore';
import './App.css';

function App() {
  const { modelPath, setModelPath, setCurrentAnimation } = useCharacterStore((state) => ({
    modelPath: state.modelPath,
    setModelPath: state.setModelPath,
    setCurrentAnimation: state.setCurrentAnimation,
  }));

  const [inputText, setInputText] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  useEffect(() => {
    // Set the default model path only once on component mount
    setModelPath('/3d-model/Mother.glb');
  }, [setModelPath]);

  const handleSpeak = async () => {
    try {
      const response = await fetch('http://localhost:8000/tts_stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const audioBlob = await response.blob();
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
    } catch (error) {
      console.error('Error fetching TTS audio:', error);
    }
  };

  const handleAudioPlay = () => {
    // Trigger a 'talking' animation when audio starts playing
    setCurrentAnimation('talking'); // Assuming you have an animation named 'talking'
  };

  const handleAudioEnded = () => {
    // Revert to an 'idle' animation when audio ends
    setCurrentAnimation('idle'); // Assuming you have an animation named 'idle'
  };

  return (
    <div className="App">
      <div className="controls">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text to speak"
        />
        <button onClick={handleSpeak}>Speak</button>
        {audioUrl && (
          <audio controls autoPlay src={audioUrl} onPlay={handleAudioPlay} onEnded={handleAudioEnded}>
            Your browser does not support the audio element.
          </audio>
        )}
      </div>

      <Canvas shadows camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={<span>Loading model...</span>}>
          <ModelViewer modelPath={modelPath} />
          <Environment preset="sunset" background />
        </Suspense>
        <OrbitControls />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;