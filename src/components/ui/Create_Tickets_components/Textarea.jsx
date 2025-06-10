import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  required = false,
  disabled = false,
  error = '',
  rows = 4,
  className = '',
  ...props 
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="text-[14px] font-medium leading-[17px] text-[#344053] font-inter mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        className={`
          bg-white border border-[#cfd4dc] rounded-lg px-[14px] py-[10px] 
          text-[14px] font-medium leading-[17px] text-[#344053] font-inter
          shadow-[0px_1px_2px_rgba(16,24,40,0.05)]
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          disabled:bg-gray-100 disabled:cursor-not-allowed
          resize-vertical
          ${error ? 'border-red-500' : ''}
        `}
        {...props}
      />
      {error && (
        <span className="text-red-500 text-sm mt-1">{error}</span>
      )}
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  rows: PropTypes.number,
  className: PropTypes.string,
};

export default Textarea;