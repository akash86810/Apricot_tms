import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const FileUpload = ({ 
  label, 
  onFileSelect, 
  accept = '*/*',
  multiple = false,
  required = false,
  disabled = false,
  error = '',
  className = '',
  ...props 
}) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      onFileSelect(multiple ? Array.from(files) : files[0]);
    }
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="text-[14px] font-medium leading-[17px] text-[#344053] font-inter mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <button
        type="button"
        onClick={handleClick}
        disabled={disabled}
        className={`
          bg-[#efefef] border border-[#cfd4dc] rounded-[18px] px-[14px] py-[8px] 
          text-[14px] font-medium leading-[17px] text-[#344053] font-inter text-center
          shadow-[0px_1px_2px_rgba(16,24,40,0.05)]
          hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          disabled:bg-gray-100 disabled:cursor-not-allowed
          transition-colors duration-200
          ${error ? 'border-red-500' : ''}
        `}
        {...props}
      >
        + Attachments
      </button>
      
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        className="hidden"
        required={required}
        disabled={disabled}
      />
      
      {error && (
        <span className="text-red-500 text-sm mt-1">{error}</span>
      )}
    </div>
  );
};

FileUpload.propTypes = {
  label: PropTypes.string,
  onFileSelect: PropTypes.func.isRequired,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default FileUpload;