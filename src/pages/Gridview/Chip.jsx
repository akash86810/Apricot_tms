import React from 'react';

const Chip = ({ 
  children, 
  variant = 'default',
  size = 'medium',
  onClick,
  onRemove,
  disabled = false,
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center rounded font-inter transition-colors';
  
  const variants = {
    default: 'bg-[#add7ff] text-[#5d5d5d]',
    yellow: 'bg-[#ffe993] text-[#5d5d5d]',
    primary: 'bg-[#0b60b0] text-white',
    secondary: 'bg-[#f6f6f6] text-[#5d5d5d] border border-[#d1d1d1]'
  };
  
  const sizes = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1 text-sm',
    large: 'px-4 py-2 text-base'
  };
  
  const chipClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:opacity-80' : ''
  } ${className}`;
  
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };
  
  const handleRemove = (e) => {
    e.stopPropagation();
    if (!disabled && onRemove) {
      onRemove();
    }
  };
  
  return (
    <span className={chipClasses} onClick={handleClick}>
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={handleRemove}
          disabled={disabled}
          className="ml-1 text-current hover:text-red-500 focus:outline-none"
        >
          ×
        </button>
      )}
    </span>
  );
};

export default Chip;