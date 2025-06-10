import React, { useState } from 'react';
import Dropdown from './Dropdown';

const PageHeader = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const userDropdownOptions = [
    { value: 'profile', label: 'Profile' },
    { value: 'settings', label: 'Settings' },
    { value: 'logout', label: 'Logout' },
  ];

  const handleUserDropdownSelect = (option) => {
    console.log('User selected:', option);
    setIsUserDropdownOpen(false);
  };

  return (
    <header className="bg-[#fafafa] px-8 py-4 flex items-center justify-between ">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="/images/img_apricot_1_1.png"
          alt="Apricot Logo"
          className="w-[67px] h-[44px] mr-4"
        />
        <h1 className="text-[47px] font-medium leading-[45px] text-[#444444] font-league-spartan">
          apricot
        </h1>
      </div>

      {/* Page Title */}
      <div className="flex-1 ml-8">
        <h2 className="text-[20px] font-medium leading-[36px] text-[#5d5d5d] font-poppins">
          Customer Support
        </h2>
      </div>

      {/* User Profile Section */}
      <div className="flex items-center relative">
        <img
          src="/images/img_majesticonsuserline.svg"
          alt="User Icon"
          className="w-[24px] h-[24px] mr-2"
        />
        <span className="text-[18px] font-normal leading-[25px] text-[#4f4f4f] font-inter mr-2">
          Smalla28
        </span>
        <button onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)} className="p-1">
          <img
            src="/images/img_arrowdropdown.svg"
            alt="Dropdown Arrow"
            className="w-[24px] h-[24px]"
          />
        </button>

        {isUserDropdownOpen && (
          <div className="absolute top-full right-0 mt-2 z-50">
            <Dropdown
              options={userDropdownOptions}
              onSelect={handleUserDropdownSelect}
              placeholder="Select option"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
