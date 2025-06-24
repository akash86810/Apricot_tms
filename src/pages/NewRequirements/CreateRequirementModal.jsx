import React from 'react';
import { ChevronDown } from 'lucide-react';

const CreateRequirementModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-auto p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2
            className="text-[#344054]"
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '24px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }}
          >
            Create Ticket
          </h2>
          <button
  onClick={onClose}
  className="text-red-500 hover:text-red-700 text-xl font-bold"
>
  ×
</button>

        </div>

        {/* Row 1: Icon Label, Icon, Issue Title */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 space-y-4 lg:space-y-0 mb-4">
          {/* Icon Label */}
          <div className="flex flex-col space-y-2 flex-1">
            <label className="text-[#344054] text-sm font-medium">Modal Name</label>
            <div className="relative h-[44px]">
              <select
                className="w-full h-full appearance-none rounded-lg border border-gray-300 px-4 text-[#667085] text-sm focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled hidden>Icon Label</option>
                <option value="Option1">Option 1</option>
                <option value="Option2">Option 2</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>

          {/* Icon */}
          <div className="flex flex-col space-y-2 flex-1">
            <label className="text-[#344054] text-sm font-medium">Icon</label>
            <div className="relative h-[44px]">
              <select
                className="w-full h-full appearance-none rounded-lg border border-gray-300 px-4 text-[#667085] text-sm focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled hidden>Icon</option>
                <option value="Option1">Option 1</option>
                <option value="Option2">Option 2</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>

          {/* Issue Title */}
          <div className="flex flex-col space-y-2 flex-1">
            <label className="text-[#344054] text-sm font-medium">Issue Title</label>
            <input
              type="text"
              placeholder="Issue Title"
              className="w-full h-[44px] rounded-lg border border-gray-300 px-4 py-[10px] text-sm text-[#667085] placeholder-[#667085] focus:outline-none"
            />
          </div>
        </div>

        {/* Issue Description */}
        <div className="flex flex-col space-y-2 mb-6">
          <label className="text-[#344054] text-sm font-medium">Issue Description</label>
          <textarea
            placeholder="Issue"
            className="w-full"
            style={{
              width: '100%',
              maxWidth: '1082px',
              height: '94px',
              borderRadius: '8px',
              gap: '8px',
              borderWidth: '1px',
              borderColor: '#D0D5DD',
              padding: '10px 14px',
              fontSize: '14px',
              color: '#667085',
              outline: 'none',
              resize: 'none',
            }}
          ></textarea>
        </div>

        {/* Row 2: Module Name & Icon */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 space-y-4 lg:space-y-0 mb-6">
          {/* Module Name */}
          <div className="flex flex-col space-y-2 flex-1">
            <label className="text-[#344054] text-sm font-medium">Tag</label>
            <div className="relative h-[44px]">
              <select
                className="w-full h-full appearance-none rounded-lg border border-gray-300 px-4 text-[#667085] text-sm focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled hidden>Tag</option>
                <option value="Module1">Module 1</option>
                <option value="Module2">Module 2</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>

          {/* Icon (again) */}
          <div className="flex flex-col space-y-2 flex-1">
            <label className="text-[#344054] text-sm font-medium">Priority</label>
            <div className="relative h-[44px]">
              <select
                className="w-full h-full appearance-none rounded-lg border border-gray-300 px-4 text-[#667085] text-sm focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled hidden>Priority</option>
                <option value="Icon1">Icon 1</option>
                <option value="Icon2">Icon 2</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>
        </div>

        {/* Final Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-[#006FC9] text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700 transition">
            Create Case
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRequirementModal;
