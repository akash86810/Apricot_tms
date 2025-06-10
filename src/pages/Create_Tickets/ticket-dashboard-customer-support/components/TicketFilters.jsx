// src/pages/ticket-dashboard-customer-support/components/TicketFilters.jsx
import React from 'react';
import { Filter } from 'lucide-react';

const TicketFilters = ({ selectedFilter, onFilterChange, ticketStats }) => {
  const filters = [
    { key: 'all', label: 'All Tickets', count: ticketStats?.total || 0 },
    { key: 'open', label: 'Open', count: ticketStats?.open || 0 },
    { key: 'in-progress', label: 'In Progress', count: ticketStats?.inProgress || 0 },
    { key: 'resolved', label: 'Resolved', count: ticketStats?.resolved || 0 },
    { key: 'closed', label: 'Closed', count: ticketStats?.closed || 0 }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-[#e7e7e7] p-6">
      <div className="flex items-center mb-4">
        <Filter className="w-4 h-4 text-[#5d5d5d] mr-2" />
        <h3 className="text-[16px] font-medium text-black font-inter">
          Filter Tickets
        </h3>
      </div>
      
      <div className="space-y-2">
        {filters?.map((filter) => {
          const isSelected = selectedFilter === filter?.key;
          return (
            <button
              key={filter?.key}
              onClick={() => onFilterChange?.(filter?.key)}
              className={`w-full text-left p-3 rounded-lg transition-colors duration-200 flex items-center justify-between ${
                isSelected 
                  ? 'bg-[#0b60b0] text-white' 
                  : 'hover:bg-gray-50 text-[#5d5d5d]'
              }`}
            >
              <span className="text-[14px] font-medium font-inter">
                {filter?.label}
              </span>
              <span className={`text-[12px] px-2 py-1 rounded-full ${
                isSelected 
                  ? 'bg-white text-[#0b60b0]' 
                  : 'bg-gray-100 text-[#5d5d5d]'
              }`}>
                {filter?.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicketFilters;