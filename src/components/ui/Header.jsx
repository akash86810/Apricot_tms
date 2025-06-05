import React, { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-[#fafafa] py-6 px-8">
      <div className="flex items-center justify-between">
        {/* Logo and Brand */}
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

        {/* Customer Support Title */}
        <div className="flex-1 text-center">
          <h2 className="text-[24px] font-medium leading-[36px] text-[#5d5d5d] font-poppins">
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
          <span className="text-[20px] font-normal leading-[25px] text-[#4f4f4f] font-inter mr-2">
            Smalla28
          </span>
          <button onClick={toggleDropdown} className="focus:outline-none">
            <img
              src="/images/img_arrowdropdown.svg"
              alt="Dropdown Arrow"
              className="w-[24px] h-[24px]"
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Profile Settings
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Account
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Logout
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
