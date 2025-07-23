
import React from 'react';

const CustomizationPage: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-[--color-text-primary]">Customize Companion</h2>
      
      <div className="space-y-6">
        {/* Model Selection */}
        <div>
          <label className="block text-lg font-semibold mb-2 text-[--color-text-secondary]">3D Model</label>
          <select className="w-full bg-gray-800 text-[--color-text-primary] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[--color-accent] border border-[--color-border]">
            <option>Default Model A</option>
            <option>Custom Model B</option>
            <option>Premium Model C</option>
          </select>
        </div>

        {/* Outfit Selection */}
        <div>
          <label className="block text-lg font-semibold mb-2 text-[--color-text-secondary]">Outfit</label>
          <select className="w-full bg-gray-800 text-[--color-text-primary] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[--color-accent] border border-[--color-border]">
            <option>Casual Wear</option>
            <option>Formal Dress</option>
            <option>Cyberpunk Suit</option>
          </select>
        </div>

        {/* Voice Pack Selection */}
        <div>
          <label className="block text-lg font-semibold mb-2 text-[--color-text-secondary]">Voice Pack</label>
          <select className="w-full bg-gray-800 text-[--color-text-primary] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[--color-accent] border border-[--color-border]">
            <option>Standard Female</option>
            <option>Energetic Female</option>
            <option>Calm Male</option>
          </select>
        </div>

        {/* Save Button */}
        <button className="w-full bg-[--color-accent] text-black font-bold py-3 rounded-md text-lg shadow-lg hover:bg-opacity-80 transition-colors duration-200 transform hover:scale-105">
          Save Customization
        </button>
      </div>
    </div>
  );
};

export default CustomizationPage;
