// TicketsSection.jsx
import React from 'react';
import TicketCard from './TicketCard';

const TicketsSection = ({ title, tickets }) => {
  return (
    <div className="border border-gray-200 p-4 rounded-md bg-white shadow-md w-full md:w-[48%]">
      <div className="flex justify-between items-center mb-4">
        <h6 className="text-md font-500 text-gray-700" style={{ color: '#0B60B0' }}>{title}</h6>
        <button className="text-sm text-blue-600 hover:underline font-medium">View All</button>
      </div>

      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketsSection;
