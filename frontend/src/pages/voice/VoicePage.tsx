
import React from 'react';

const VoicePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h2 className="text-2xl font-bold mb-6 text-[--color-text-primary]">Voice Interaction</h2>
      
      <div className="relative w-48 h-48 rounded-full bg-gray-800 flex items-center justify-center mb-8 shadow-lg border border-[--color-border]">
        {/* Voice visualizer placeholder */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 animate-pulse"></div>
        <svg className="w-24 h-24 text-[--color-accent] animate-bounce" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V2a2 2 0 00-2-2H2zm10 10a1 1 0 01-1 1H9a1 1 0 01-1-1V6a1 1 0 011-1h2a1 1 0 011 1v4z"/>
        </svg>
      </div>

      <button className="bg-[--color-accent] text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-opacity-80 transition-colors duration-200 transform hover:scale-105">
        Push to Talk
      </button>
      <p className="mt-4 text-[--color-text-secondary] text-sm">Hold to speak, release to send.</p>
    </div>
  );
};

export default VoicePage;
