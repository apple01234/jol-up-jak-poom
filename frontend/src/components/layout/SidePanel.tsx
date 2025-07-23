
import React, { useState } from 'react';
import ChatPage from '../../pages/chat/ChatPage';
import VoicePage from '../../pages/voice/VoicePage';
import CustomizationPage from '../../pages/customization/CustomizationPage';
import MarketplacePage from '../../pages/marketplace/MarketplacePage';
import SettingsPage from '../../pages/settings/SettingsPage';

type Tab = 'Chat' | 'Voice' | 'Customization' | 'Market' | 'Settings';

interface TabConfig {
  key: Tab;
  icon: string;
  label: string;
}

const SidePanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Chat');

  const tabs: TabConfig[] = [
    { key: 'Chat', icon: '💬', label: 'Chat' },
    { key: 'Voice', icon: '🎙️', label: 'Voice' },
    { key: 'Customization', icon: '👗', label: 'Customize' },
    { key: 'Market', icon: '🛍️', label: 'Market' },
    { key: 'Settings', icon: '⚙️', label: 'Settings' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Chat':
        return <ChatPage />;
      case 'Voice':
        return <VoicePage />;
      case 'Customization':
        return <CustomizationPage />;
      case 'Market':
        return <MarketplacePage />;
      case 'Settings':
        return <SettingsPage />;
      default:
        return <ChatPage />;
    }
  };

  return (
    <div className="flex flex-col h-full p-6 bg-[--color-background]">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-[--color-text-primary] glow-accent">AI Companion</h2>
        <div className="w-24 h-1 bg-[--color-accent] mt-2"></div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-around mb-6 border-b border-[--color-border] pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`
              py-2 px-4 text-lg font-semibold transition-all duration-300 relative overflow-hidden
              ${activeTab === tab.key
                ? 'text-[--color-accent] border-b-2 border-[--color-accent] bg-black/30 shadow-lg shadow-[--color-accent]/20'
                : 'text-[--color-text-secondary] hover:text-[--color-text-primary] hover:bg-black/20'
              }
            `}
          >
            {activeTab === tab.key && (
              <span className="absolute inset-0 bg-gradient-to-r from-[--color-accent]/20 to-transparent animate-pulse"></span>
            )}
            <span className="relative z-10">{tab.icon} {tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-grow overflow-y-auto bg-black/20 rounded-lg p-4 border border-[--color-border]">
        {renderContent()}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-[--color-border] text-sm text-[--color-text-secondary] flex justify-between items-center">
        <span>Status: Online</span>
        <span>Version 1.0</span>
      </div>
    </div>
  );
};

export default SidePanel;
