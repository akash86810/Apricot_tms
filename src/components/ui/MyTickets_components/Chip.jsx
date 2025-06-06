import React from 'react';

const Chip = ({
  children,
  variant = 'default',
  size = 'medium',
  selected = false,
  onClick,
  onRemove,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1';

  const variants = {
    default: selected
      ? 'bg-[#007aff] text-white border border-[#007aff]'
      : 'bg-white text-[#79747e] border border-[#cac4d0] hover:border-[#007aff] hover:text-[#007aff]',
    primary: 'bg-[#007aff] text-white border border-[#007aff]',
    secondary: 'bg-gray-100 text-gray-800 border border-gray-300',
    success: 'bg-green-100 text-green-800 border border-green-300',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    error: 'bg-red-100 text-red-800 border border-red-300',
  };

  const sizes = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-4 py-1.5 text-sm',
    large: 'px-6 py-2 text-base',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  const chipClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`;

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
    <span onClick={handleClick} className={chipClasses} {...props}>
      {children}
      {onRemove && (
        <button
          onClick={handleRemove}
          className="ml-2 text-current hover:text-red-600 focus:outline-none"
          disabled={disabled}
        >
          ×
        </button>
      )}
    </span>
  );
};

export default Chip;
