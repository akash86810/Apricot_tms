// TicketCard.jsx
import React from 'react';

const TicketCard = ({ ticket }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 mb-4 bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-sm text-blue-700 font-medium">{ticket.category}</span>
        </div>
        <span className="text-sm text-blue-600 font-semibold">{ticket.ticketNumber}</span>
      </div>

      <h3 className="font-semibold mt-2 text-[15px] text-gray-800">{ticket.title}</h3>
      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
        {ticket.description} <span className="text-blue-500 hover:underline cursor-pointer">More</span>
      </p>

      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-2">
          {ticket.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`px-2 py-1 text-xs rounded ${
                tag === 'Cash Flow'
                  ? 'bg-yellow-100 text-yellow-700 border border-yellow-300'
                  : 'bg-blue-100 text-blue-700 border border-blue-300'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-xs text-gray-500">{ticket.timestamp}</span>
      </div>
    </div>
  );
};

export default TicketCard;
