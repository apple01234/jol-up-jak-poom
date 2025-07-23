
import React from 'react';

const SettingsPage: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-[--color-text-primary]">Settings</h2>
      
      <div className="space-y-6">
        {/* Account Settings */}
        <div className="bg-gray-800 rounded-lg p-4 border border-[--color-border] shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-[--color-text-primary]">Account</h3>
          <div className="space-y-2 text-[--color-text-secondary]">
            <p>Email: <span className="text-[--color-text-primary]">user@example.com</span></p>
            <p>Subscription: <span className="text-[--color-accent]">Premium Pro</span></p>
            <button className="bg-[--color-accent] text-black py-2 px-4 rounded-md text-sm font-medium hover:bg-opacity-80 transition-colors duration-200 transform hover:scale-105">
              Manage Subscription
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-gray-800 rounded-lg p-4 border border-[--color-border] shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-[--color-text-primary]">Notifications</h3>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-[--color-accent] bg-gray-700 border-gray-600 rounded focus:ring-[--color-accent]" defaultChecked />
            <span className="text-[--color-text-secondary]">Receive push notifications</span>
          </label>
        </div>

        {/* Theme Settings (Placeholder) */}
        <div className="bg-gray-800 rounded-lg p-4 border border-[--color-border] shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-[--color-text-primary]">Theme</h3>
          <p className="text-[--color-text-secondary]">Dark Mode (Default)</p>
          <button className="mt-2 bg-gray-700 text-[--color-text-primary] py-2 px-4 rounded-md text-sm font-medium hover:bg-opacity-80 transition-colors duration-200 transform hover:scale-105">
            Switch to Light Mode (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
