import React, { useState } from 'react';

const InputField = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  disabled = false,
  error = '',
  label = '',
  required = false,
  icon = null,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const baseClasses =
    'w-full px-3 py-2 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1';
  const stateClasses = error
    ? 'border-red-500 focus:ring-red-500'
    : 'border-[#d1d1d1] focus:ring-[#0b60b0] focus:border-[#0b60b0]';
  const disabledClasses = disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white';

  const inputClasses = `${baseClasses} ${stateClasses} ${disabledClasses} ${icon ? 'pl-10' : ''} ${className}`;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {typeof icon === 'string' ? (
              <img src={icon} alt="Input icon" className="w-5 h-5 text-gray-400" />
            ) : (
              icon
            )}
          </div>
        )}

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

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default InputField;
