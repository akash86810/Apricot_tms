import React from 'react';

const ActionButton = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseClasses =
    'font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center';

  const variants = {
    primary: 'bg-[#006fc9] text-white hover:bg-[#005ba3] focus:ring-[#006fc9] disabled:bg-gray-400',
    secondary:
      'bg-[#0b60b0] text-white hover:bg-[#094d8f] focus:ring-[#0b60b0] disabled:bg-gray-400',
    outline:
      'border border-[#0b60b0] text-[#0b60b0] hover:bg-[#0b60b0] hover:text-white focus:ring-[#0b60b0] disabled:border-gray-300 disabled:text-gray-400',
    ghost: 'text-gray-600 hover:bg-gray-100 focus:ring-gray-300 disabled:text-gray-400',
    success: 'bg-[#34c759] text-white hover:bg-[#2ba84a] focus:ring-[#34c759] disabled:bg-gray-400',
    assigned:
      'bg-[#007aff] text-white hover:bg-[#0056cc] focus:ring-[#007aff] disabled:bg-gray-400',
  };

  const sizes = {
    small: 'px-3 py-1 text-sm h-8',
    medium: 'px-4 py-2 text-base h-10',
    large: 'px-6 py-3 text-lg h-12',
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${className}`;

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default ActionButton;
