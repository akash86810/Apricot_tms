import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputField = ({ 
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  disabled = false,
  required = false,
  error = '',
  className = '',
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const inputClasses = `
    w-full px-[30px] py-[16px] text-[14px] font-normal leading-[21px] text-[#888888] 
    bg-[#fafafa] border border-[#d1d1d1] rounded-[10px] 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    disabled:bg-gray-100 disabled:cursor-not-allowed
    ${error ? 'border-red-500' : ''}
    ${className}
  `;
  
  const labelClasses = `
    block text-[16px] font-medium leading-[24px] text-[#3d3d3d] mb-2
    font-poppins
  `;
  
  return (
    <div className="w-full">
      {label && (
        <label className={labelClasses}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={inputClasses}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default InputField;