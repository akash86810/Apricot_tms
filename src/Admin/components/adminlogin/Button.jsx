import React from 'react';

const Button = ({ 
  children = "Button", 
  onClick, 
  disabled = false,
  className = ""
}) => {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`flex flex-row items-center justify-center h-12 px-8 bg-button-1 rounded-md text-sm font-poppins font-medium leading-[21px] text-button-1 ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90 transition-opacity'} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;