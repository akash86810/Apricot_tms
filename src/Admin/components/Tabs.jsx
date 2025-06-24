import React, { useState } from 'react';

const Tabs = ({ tabs, defaultActiveTab = 0, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = (index, tab) => {
    setActiveTab(index);
    if (onTabChange) {
      onTabChange(index, tab);
    }
  };

  return (
    <div className="bg-[#f6f6f6] pt-7 px-6 border border-[#e7e7e7]">
      <div className="inline-flex items-center border-b-[2px] border-[#d1d1d1]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index, tab)}
            className={`relative pb-2 px-4 text-[16px] font-medium font-inter transition-colors duration-200 focus:outline-none
              ${
                activeTab === index
                  ? 'text-[#0b60b0] border-b-[2px] border-[#0b60b0]'
                  : 'text-[#888888]'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
