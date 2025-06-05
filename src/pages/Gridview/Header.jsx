import React, { useState } from 'react';
import Dropdown from './Dropdown';

const Header = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const userMenuOptions = [
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
    { label: 'Logout', value: 'logout' }
  ];

  const handleUserMenuSelect = (value) => {
    console.log('User menu selected:', value);
    setIsUserDropdownOpen(false);
  };

  return (
    <header className="bg-[#fafafa] px-8 py-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center">
        <img 
          src="/images/img_apricot_1_1.png" 
          alt="Apricot Logo" 
          className="w-[67px] h-[44px] mr-4"
        />
        <h1 className="text-[48px] font-medium leading-[45px] text-[#444444] font-league-spartan">
          apricot
        </h1>
      </div>

      {/* Title Section */}
      <div className="flex-1 text-center">
        <h2 className="text-[24px] font-medium leading-[36px] text-[#5d5d5d] font-poppins">
          Customer Support
        </h2>
      </div>

      {/* User Section */}
      <div className="flex items-center relative">
        <img 
          src="/images/img_majesticonsuserline.svg" 
          alt="User Icon" 
          className="w-[24px] h-[24px] mr-2"
        />
        <span className="text-[20px] font-normal leading-[25px] text-[#4f4f4f] mr-2 font-inter">
          Smalla28
        </span>
        <button 
          onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
          className="p-1"
        >
          <img 
            src="/images/img_arrowdropdown.svg" 
            alt="Dropdown Arrow" 
            className="w-[24px] h-[24px]"
          />
        </button>
        
        {isUserDropdownOpen && (
          <div className="absolute top-full right-0 mt-2 z-50">
            <Dropdown
              options={userMenuOptions}
              onSelect={handleUserMenuSelect}
              placeholder="User Menu"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;