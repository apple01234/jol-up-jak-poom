import { create } from 'zustand';

interface CharacterState {
  modelPath: string;
  setModelPath: (path: string) => void;
  currentAnimation: string | null;
  setCurrentAnimation: (animation: string | null) => void;
}

const useCharacterStore = create<CharacterState>((set) => ({
  modelPath: '/3d-model/Mother.glb', // Default model path
  setModelPath: (path) => set({ modelPath: path }),
  currentAnimation: null,
  setCurrentAnimation: (animation) => set({ currentAnimation: animation }),
}));

export default useCharacterStore;
