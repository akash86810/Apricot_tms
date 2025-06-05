import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ 
  options = [], 
  onSelect, 
  placeholder = 'Select option',
  value = '',
  className = '',
  disabled = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
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

  const handleSelect = (option) => {
    setSelectedValue(option.value);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option.value);
    }
  };

  const selectedOption = options.find(option => option.value === selectedValue);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`w-full px-4 py-2 text-left bg-white border border-[#d1d1d1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b60b0] ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-[#0b60b0]'
        }`}
      >
        <span className="block truncate text-[#5d5d5d]">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className={`w-5 h-5 text-[#888888] transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-[#d1d1d1] rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option)}
              className={`w-full px-4 py-2 text-left hover:bg-[#f6f6f6] focus:outline-none focus:bg-[#f6f6f6] ${
                selectedValue === option.value ? 'bg-[#f1f7fe] text-[#0b60b0]' : 'text-[#5d5d5d]'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;