import React from 'react';
import Button from '../ui/ActionButton';

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
  size = 'medium',
  ...props
}) => {
  if (!isOpen) return null;

  const sizeClasses = {
    small: 'max-w-md',
    medium: 'max-w-lg',
    large: 'max-w-2xl',
    xlarge: 'max-w-4xl',
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
      {...props}
    >
      <div
        className={`bg-white rounded-lg shadow-lg w-full ${sizeClasses[size]} max-h-[90vh] overflow-y-auto`}
      >
        {/* Modal Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            {title && <h2 className="text-xl font-semibold text-gray-900">{title}</h2>}
            {showCloseButton && (
              <Button
                onClick={onClose}
                variant="ghost"
                size="small"
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </Button>
            )}
          </div>
        )}

        {/* Modal Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
