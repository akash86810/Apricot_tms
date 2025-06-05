import React, { useState } from 'react';

const Tabs = ({ 
  tabs = [], 
  defaultActiveTab = 0, 
  onTabChange,
  className = '' 
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onTabChange) {
      onTabChange(index);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex border-b border-[#e7e7e7] bg-[#f6f6f6]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`px-4 py-3 text-[16px] font-medium leading-[20px] font-inter border border-[#d1d1d1] transition-colors ${
              activeTab === index
                ? 'text-[#0b60b0] border-[#0b60b0] bg-white'
                : 'text-[#888888] hover:text-[#5d5d5d] hover:bg-[#f0f0f0]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {tabs[activeTab] && tabs[activeTab].content && (
        <div className="mt-4">
          {tabs[activeTab].content}
        </div>
      )}
    </div>
  );
};

export default Tabs;