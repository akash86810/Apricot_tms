import React from 'react';

const MessageItem = ({ userInitial, message, index }) => {
  const bgColor = index % 2 === 0 ? '#E7E7E7' : '#E1EEFD';
  const isEven = index % 2 === 0;

  return (
    <div
      className={`w-[550px] h-[93px] rounded-[8px] p-[10px] flex items-center gap-[14px] ${isEven ? '' : 'flex-row-reverse'}`}
      style={{ background: bgColor }}
    >
      {/* User Initial */}
      <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full border border-gray-400 text-[#5D5D5D] font-inter font-normal text-base bg-white">
        {userInitial}
      </div>

      {/* Main message box */}
      <div className="flex items-center justify-center w-[460px] h-[38px] rounded text-black font-inter font-normal text-[15px] leading-none p-2">
        {message}
      </div>
    </div>
  );
};

export default MessageItem;
