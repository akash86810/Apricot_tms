import React from 'react';
import PropTypes from 'prop-types';

const Chips = ({
  children,
  variant = 'default',
  size = 'medium',
  icon = null,
  onClose = null,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center font-medium rounded-full transition-colors duration-200';

  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    assigned: 'bg-blue-600 text-white',
    closed: 'bg-green-600 text-white',
    created: 'bg-orange-600 text-white',
    high: 'bg-red-600 text-white',
    critical: 'bg-red-600 text-white',
    medium: 'bg-yellow-600 text-white',
    low: 'bg-gray-800 text-white',
  };

  const sizes = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1 text-sm',
    large: 'px-4 py-2 text-base',
  };

  const chipVariant = variants[variant.toLowerCase()] || variants.default;
  const chipSize = sizes[size] || sizes.medium;

  const ChipsClasses = `${baseClasses} ${chipVariant} ${chipSize} ${className}`;

  return (
    <span className={ChipsClasses} {...props}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
      {onClose && (
        <button
          onClick={onClose}
          className="ml-1 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5"
          type="button"
          aria-label="Close chip"
          title="Close"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

Chips.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'warning',
    'danger',
    'assigned',
    'closed',
    'created',
    'high',
    'critical',
    'medium',
    'low',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.node,
  onClose: PropTypes.func,
  className: PropTypes.string,
};

export default Chips;
