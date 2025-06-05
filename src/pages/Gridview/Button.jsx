import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';
  
  const variants = {
    primary: 'bg-[#0b60b0] text-white hover:bg-[#094a8f] focus:ring-[#0b60b0]',
    secondary: 'bg-[#f6f6f6] text-[#5d5d5d] border border-[#d1d1d1] hover:bg-[#e6e6e6]',
    outline: 'border border-[#d1d1d1] text-[#5d5d5d] hover:bg-[#f6f6f6]',
    ghost: 'text-[#5d5d5d] hover:bg-[#f6f6f6]'
  };
  
  const sizes = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;