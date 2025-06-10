// src/pages/ticket-dashboard-customer-support/components/QuickActionPanel.jsx
import React from 'react';
import { Plus, Download, BarChart3 } from 'lucide-react';


const QuickActionPanel = ({ onCreateTicket, onViewReports, onExportData }) => {
  const quickActions = [
    {
      label: 'Create Ticket',
      icon: Plus,
      onClick: onCreateTicket,
      variant: 'primary',
      className: 'bg-[#0b60b0] text-white hover:bg-[#094d93]'
    },
    {
      label: 'View Reports',
      icon: BarChart3,
      onClick: onViewReports,
      variant: 'outline',
      className: 'border-[#e7e7e7] text-[#5d5d5d] hover:bg-gray-50'
    },
    {
      label: 'Export Data',
      icon: Download,
      onClick: onExportData,
      variant: 'outline',
      className: 'border-[#e7e7e7] text-[#5d5d5d] hover:bg-gray-50'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-[#e7e7e7] p-6">
      <h3 className="text-[16px] font-medium text-black font-inter mb-4">
        Quick Actions
      </h3>
      
      <div className="space-y-3">
        {quickActions?.map((action, index) => {
          const IconComponent = action?.icon;
          return (
            <button
              key={index}
              onClick={action?.onClick}
              className={`w-full flex items-center justify-center px-4 py-3 rounded-lg text-[14px] font-medium font-inter transition-colors duration-200 ${action?.className}`}
            >
              <IconComponent className="w-4 h-4 mr-2" />
              {action?.label}
            </button>
          );
        })}
      </div>

      {/* Additional Info */}
      <div className="mt-6 pt-6 border-t border-[#e7e7e7]">
        <div className="text-[12px] text-[#5d5d5d] font-inter">
          <p className="mb-2">
            <span className="font-medium">Last Update:</span>
          </p>
          <p className="text-[11px]">
            {new Date().toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickActionPanel;