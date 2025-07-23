
import React from 'react';

const ChatPage: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow p-4 overflow-y-auto space-y-4">
        {/* AI Message */}
        <div className="flex justify-start">
          <div className="bg-gray-800 text-[--color-text-primary] rounded-lg p-3 max-w-[70%] shadow-md">
            <p>Hello there! How can I assist you today?</p>
          </div>
        </div>
        {/* User Message */}
        <div className="flex justify-end">
          <div className="bg-[--color-accent] text-black rounded-lg p-3 max-w-[70%] shadow-md">
            <p>I'd like to customize my AI companion.</p>
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-[--color-border] bg-black/30">
        <div className="flex items-center">
          <input 
            type="text" 
            placeholder="Type your message..." 
            className="flex-grow bg-gray-800 text-[--color-text-primary] rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[--color-accent] border border-transparent focus:border-[--color-accent]"
          />
          <button className="ml-3 bg-[--color-accent] text-black rounded-full p-2 shadow-md hover:bg-opacity-80 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
