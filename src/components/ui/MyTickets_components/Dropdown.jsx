import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({
  options = [],
  onSelect,
  placeholder = 'Select option',
  value = '',
  disabled = false,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option.value);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  const selectedLabel = options.find((opt) => opt.value === selectedOption)?.label || placeholder;

  return (
    <div className={`relative ${className}`} ref={dropdownRef} {...props}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`w-full px-3 py-2 text-left bg-white border border-[#d1d1d1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b60b0] focus:border-[#0b60b0] ${
          disabled ? 'bg-gray-100 cursor-not-allowed' : 'cursor-pointer hover:border-[#0b60b0]'
        }`}
      >
        <span className={selectedOption ? 'text-gray-900' : 'text-gray-500'}>{selectedLabel}</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.length === 0 ? (
            <div className="px-3 py-2 text-gray-500">No options available</div>
          ) : (
            options.map((option, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleOptionSelect(option)}
                className="w-full px-3 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none first:rounded-t-lg last:rounded-b-lg"
              >
                {option.label}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
