
import React from 'react';

const MarketplacePage: React.FC = () => {
  const items = [
    { id: 1, name: 'Cyberpunk Outfit', price: '250 HC', image: 'https://via.placeholder.com/150/f5c518/000000?text=Outfit' },
    { id: 2, name: 'Elegant Dress', price: '180 HC', image: 'https://via.placeholder.com/150/f5c518/000000?text=Dress' },
    { id: 3, name: 'AI Voice Pack: Serene', price: '100 HC', image: 'https://via.placeholder.com/150/f5c518/000000?text=Voice' },
    { id: 4, name: 'Animated Pose Pack', price: '120 HC', image: 'https://via.placeholder.com/150/f5c518/000000?text=Pose' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-[--color-text-primary]">Marketplace</h2>
      
      {/* Search and Filter */}
      <div className="flex space-x-4 mb-6">
        <input 
          type="text" 
          placeholder="Search items..." 
          className="flex-grow bg-gray-800 text-[--color-text-primary] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[--color-accent] border border-[--color-border]"
        />
        <select className="bg-gray-800 text-[--color-text-primary] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[--color-accent] border border-[--color-border]">
          <option>All Categories</option>
          <option>Models</option>
          <option>Outfits</option>
          <option>Voice Packs</option>
          <option>Animations</option>
        </select>
      </div>

      {/* Item Grid */}
      <div className="grid grid-cols-2 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-[--color-border] transition-transform duration-200 hover:scale-105">
            <img src={item.image} alt={item.name} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[--color-text-primary] mb-1">{item.name}</h3>
              <p className="text-[--color-accent] font-bold">{item.price}</p>
              <button className="mt-3 w-full bg-[--color-accent] text-black py-2 rounded-md text-sm font-medium hover:bg-opacity-80 transition-colors duration-200 transform hover:scale-105">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplacePage;
