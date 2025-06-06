import React, { useState } from 'react';
import Chip from '../../components/ui/Chip';

const TicketCard = ({ ticket }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  const getChipVariant = (category) => {
    switch (category) {
      case 'MT940':
        return 'default';
      case 'Cash Flow':
        return 'yellow';
      default:
        return 'default';
    }
  };

  return (
    <div className="bg-white border border-[#d1d1d1] rounded-lg p-4 h-[168px] w-full max-w-full relative">
      {/* Priority Indicator */}
      <div className="absolute top-4 left-4 w-[14px] h-[14px] bg-[#ff3b30] rounded-full flex-shrink-0"></div>
      
      {/* Category and Ticket Number */}
      <div className="flex justify-between items-start mb-2 ml-6">
        <span className="text-[14px] font-normal leading-[17px] text-[#0b60b0] font-inter truncate flex-1 mr-2">
          {ticket.category}
        </span>
        <span className={`text-[14px] font-normal leading-[17px] font-inter whitespace-nowrap flex-shrink-0 ${
          ticket.status === 'Created' ? 'text-[#ff9500]' :
          ticket.status === 'Assigned' ? 'text-[#007aff]' :
          ticket.status === 'WIP' ? 'text-[#af52de]' :
          'text-[#34c759]'
        }`}>
          {ticket.ticketNumber}
        </span>
      </div>
      
      {/* Title - prevent wrapping */}
      <h3 className="text-[18px] font-medium leading-[22px] text-[#454545] mb-2 ml-4 font-inter truncate">
        {ticket.title}
      </h3>
      
      {/* Description */}
      <div className="ml-4 mb-4">
        <p className="text-[15px] font-normal leading-[18px] text-[#5d5d5d] font-inter">
          <span className={`${!isExpanded ? 'line-clamp-2' : ''}`}>
            {isExpanded ? ticket.fullDescription : ticket.description}
          </span>
          <button 
            onClick={handleMoreClick}
            className="text-[15px] font-medium leading-[18px] text-[#0b60b0] ml-1 font-inter hover:underline whitespace-nowrap"
          >
            {isExpanded ? 'Less' : 'More'}
          </button>
        </p>
      </div>
      
      {/* Bottom Section */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Chip variant={getChipVariant(ticket.tag)} size="small">
            {ticket.tag}
          </Chip>
        </div>
        {ticket.timestamp && (
          <span className="text-[14px] font-normal leading-[17px] text-[#6d6d6d] font-inter whitespace-nowrap ml-2 truncate">
            {ticket.timestamp}
          </span>
        )}
      </div>
    </div>
  );
};

export default TicketCard;


