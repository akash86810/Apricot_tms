import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({
  label,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  required = false,
  disabled = false,
  error = '',
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className={`relative flex flex-col ${className}`}>
      {label && (
        <label className="text-[14px] font-medium leading-[17px] text-[#344053] font-inter mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={`
            w-full bg-white border border-[#cfd4dc] rounded-lg px-[14px] py-[10px]
            text-left text-[16px] font-normal leading-[20px] font-inter
            shadow-[0px_1px_2px_rgba(16,24,40,0.05)]
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            disabled:bg-gray-100 disabled:cursor-not-allowed
            flex items-center justify-between
            ${error ? 'border-red-500' : ''}
            ${selectedOption ? 'text-[#344053]' : 'text-[#667084]'}
          `}
          {...props}
        >
          <span>{selectedOption ? selectedOption.label : placeholder}</span>
          <img
            src="/images/img_chevrondown.svg"
            alt="Dropdown Arrow"
            className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isOpen && !disabled && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#cfd4dc] rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option)}
                className="w-full px-[14px] py-[10px] text-left text-[16px] font-normal leading-[20px] text-[#344053] font-inter hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default Dropdown;
