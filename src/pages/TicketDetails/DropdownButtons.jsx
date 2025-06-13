import React, { useState } from 'react';

const DropdownButtons = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    if (openDropdown === id) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(id);
    }
  };

  return (
    <div className="flex gap-[10px]">
      {/* Dropdown 1 */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown(1)}
          className="w-[182px] h-[36px] flex items-center justify-between rounded border border-[#007AFF] px-[10px] py-[4px] text-[#007AFF]"
        >
          Implementation
          <svg
            className="ml-2"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#007AFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {openDropdown === 1 && (
          <div className="absolute top-[40px] left-0 bg-white border border-[#007AFF] rounded shadow-md w-[182px] animate-dropdown origin-top">
            <div className="">Work inprogress</div>
            <div className="">Closed</div>
            <div className="">Problem</div>
            <div className="">Change request</div>
          </div>
        )}
      </div>

      {/* Dropdown 2 */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown(2)}
          className="w-[182px] h-[36px] flex items-center justify-between rounded border border-[#007AFF] px-[10px] py-[4px] text-[#007AFF]"
        >
          Assigned
          <svg
            className="ml-2"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#007AFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {openDropdown === 2 && (
          <div className="absolute top-[40px] left-0 bg-white border border-[#007AFF] rounded shadow-md w-[182px] animate-dropdown origin-top">
            <div className="">Work inprogress</div>
            <div className="">Closed</div>
            <div className="">Problem</div>
            <div className="">Change request</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownButtons;
