import React from 'react';

const EditText = ({ 
  placeholder = "Enter text", 
  value = "", 
  onChange, 
  type = "text",
  disabled = false,
  className = ""
}) => {
  return (
    <div className={`flex flex-row items-center w-full h-[53px] bg-global-2 border border-solid border-gray-300 rounded-[10px] px-[30px] ${className}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full h-full bg-transparent text-sm font-poppins font-normal leading-[21px] text-left text-edittext-1 placeholder-edittext-1 outline-none"
      />
    </div>
  );
};

export default EditText;