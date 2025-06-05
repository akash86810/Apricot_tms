import React, { useState } from 'react';

const tabNavigation = ({
  tabs = [],
  defaultActiveTab = 0,
  onTabChange,
  className = '',
  ...props
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onTabChange) {
      onTabChange(index, tabs[index]);
    }
  };

  return (
    <div className={`w-full ${className}`} {...props}>
      {/* Tab Headers */}
      <div className="flex border-b border-[#e7e7e7] bg-[#f6f6f6]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`px-4 py-3 text-base font-medium transition-colors duration-200 border border-[#d1d1d1] ${
              activeTab === index
                ? 'text-[#0b60b0] border-[#0b60b0] bg-white'
                : 'text-[#888888] border-[#d1d1d1] bg-transparent hover:text-[#0b60b0]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">{tabs[activeTab] && tabs[activeTab].content}</div>
    </div>
  );
};

export default tabNavigation;
