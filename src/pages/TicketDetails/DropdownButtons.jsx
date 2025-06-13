import React, { useState } from "react";

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
            <div  className="ml-7 py-2 font-medium text-[14px] leading-none tracking-normal text-[#5856D6] font-inter">Work inprogress</div>
            <div className="ml-16 py-2 font-medium text-[14px] leading-none tracking-normal text-[#29CB00] font-inter">Closed</div>
            <div className="ml-16 py-2 font-medium text-[14px] leading-none tracking-normal text-[#454545] font-inter">Problem</div>
            <div className="ml-8 py-2 font-medium text-[14px] leading-none tracking-normal text-[#454545] font-inter">Change request</div>

          </div>
        )}
      </div>

      {/* Dropdown 2 */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown(2)}
          className="w-[182px] h-[36px] flex items-center justify-between rounded border border-[#007AFF] px-[10px] py-[4px] text-white"
          style={{backgroundColor:"#007AFF"}}
          // background: var(--Colors-Blue, #007AFF);

        >
          Assigned
          <svg
            className="ml-2"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {openDropdown === 2 && (
          <div className="absolute top-[40px] left-0 bg-white border border-[#007AFF] rounded shadow-md w-[182px] animate-dropdown origin-top">
            <div  className="ml-7 py-2 font-medium text-[14px] leading-none tracking-normal text-[#5856D6] font-inter">Work inprogress</div>
            <div className="ml-16 py-2 font-medium text-[14px] leading-none tracking-normal text-[#29CB00] font-inter">Closed</div>
            <div className="ml-16 py-2 font-medium text-[14px] leading-none tracking-normal text-[#454545] font-inter">Problem</div>
            <div className="ml-8 py-2 font-medium text-[14px] leading-none tracking-normal text-[#454545] font-inter">Change request</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownButtons;
