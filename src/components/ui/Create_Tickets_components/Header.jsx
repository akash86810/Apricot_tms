import React from 'react';

const Header = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <header className="bg-[#fafafa] px-8 py-6">
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
        <div>
          <h2 className="text-[24px] font-medium leading-[36px] text-[#5d5d5d] font-poppins">
            Customer Support
          </h2>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-6">
        <button
          onClick={handleBackClick}
          className="flex items-center px-3 py-2 border border-[#e7e7e7] rounded-lg bg-white hover:bg-gray-50 transition-colors"
        >
          <img src="/images/img_icroundarrowback.svg" alt="Back Arrow" className="w-5 h-5 mr-2" />
          <span className="text-[14px] font-normal leading-[17px] text-black font-inter">Back</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
