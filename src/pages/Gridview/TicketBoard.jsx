import React from 'react';
import TicketCard from './TicketCard';

const TicketBoard = ({ tickets }) => {
  const columns = [
    {
      title: 'Created',
      status: 'Created',
      color: '#ff9500',
      bgColor: '#f1f7fe',
    },
    {
      title: 'Assigned',
      status: 'Assigned',
      color: '#007aff',
      bgColor: '#f6f6f6',
    },
    {
      title: 'W I P',
      status: 'WIP',
      color: '#af52de',
      bgColor: '#f1f7fe',
    },
    {
      title: 'Closed',
      status: 'Closed',
      color: '#34c759',
      bgColor: '#f6f6f6',
    },
  ];

  const getTicketsByStatus = (status) => {
    return tickets?.filter((ticket) => ticket?.status === status) || [];
  };

  return (
    // <div className="w-full overflow-hidden">
    //   {/* Fixed 4-column layout that doesn't wrap */}
    //   <div className="flex w-full h-[898px] min-w-[1200px]">
    //     {columns.map((column, index) => (
    //       <div
    //         key={column.status}
    //         className="flex-1 h-full relative flex flex-col min-w-0"
    //         style={{ backgroundColor: column.bgColor }}
    //       >
    //         {/* Column Header - prevent text wrapping */}
    //         <div
    //           className="h-[77px] border-b-4 sticky top-0 border-solid flex-shrink-0"
    //           style={{ borderColor: column.color }}
    //         >
    //           <div className="flex items-center justify-center h-full px-2">
    //             <div
    //               className="w-[16px] h-[16px] rounded-full mr-3 flex-shrink-0"
    //               style={{ backgroundColor: column.color }}
    //             ></div>
    //             <h2
    //               className="text-lg lg:text-[24px] font-semibold leading-[30px] font-inter text-center whitespace-nowrap"
    //               style={{ color: column.color }}
    //             >
    //               {column.title}
    //             </h2>
    //           </div>
    //         </div>

    //         {/* Tickets Container - responsive to container width */}
    //         <div
    //           className="flex-1 p-2 lg:p-4 space-y-2 lg:space-y-4 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400"
    //           style={{
    //             scrollBehavior: 'smooth',
    //             height: 'calc(100% - 77px)',
    //           }}
    //         >
    //           {getTicketsByStatus(column.status).map((ticket, ticketIndex) => (
    //             <TicketCard key={`${ticket?.id}-${ticketIndex}`} ticket={ticket} />
    //           ))}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="w-full overflow-hidden">
  {/* Fixed height TicketBoard */}
  <div className="flex w-full h-[calc(100vh-160px)]">
    {columns.map((column, index) => (
      <div
        key={column.status}
        className="flex-1 relative flex flex-col overflow-hidden"
        style={{ backgroundColor: column.bgColor }}
      >
        {/* Sticky Column Header */}
        <div
          className="h-[77px] border-b-4 sticky top-0 z-10 flex-shrink-0 bg-white"
          style={{ borderColor: column.color }}
        >
          <div className="flex items-center justify-center h-full px-2">
            <div
              className="w-[16px] h-[16px] rounded-full mr-3"
              style={{ backgroundColor: column.color }}
            ></div>
            <h2
              className="text-lg lg:text-[24px] font-semibold leading-[30px] text-center whitespace-nowrap"
              style={{ color: column.color }}
            >
              {column.title}
            </h2>
          </div>
        </div>

        {/* Scrollable Ticket List */}
        <div
          className="flex-1 overflow-y-auto p-2 lg:p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400"
        >
          {getTicketsByStatus(column.status).map((ticket, ticketIndex) => (
            <TicketCard key={`${ticket?.id}-${ticketIndex}`} ticket={ticket} />
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default TicketBoard;
