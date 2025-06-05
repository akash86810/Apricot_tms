import React from 'react';
import Button from '../../components/ui/ActionButton';

const TicketTable = ({ tickets = [] }) => {
  const getStatusVariant = (status) => {
    switch (status.toLowerCase()) {
      case 'assigned':
        return 'assigned';
      case 'closed':
        return 'success';
      default:
        return 'primary';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'text-[#d80000]';
      case 'medium':
        return 'text-[#ff8c00]';
      case 'low':
        return 'text-[#34c759]';
      default:
        return 'text-[#5d5d5d]';
    }
  };

  const tableHeaders = [
    'Ticket No',
    'Ticket Title',
    'Status',
    'SLA',
    'Priority',
    'Req Date',
    'Req Time',
    'Req By',
    'Ticket Owner',
    'Updated Date',
    'Updated Time',
    'Updated By',
    'Module',
    'Sub Module',
    'Icon',
  ];

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        {/* Table Header */}
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th
                key={index}
                className="bg-[#006fc9] text-white text-[16px] font-medium leading-[24px] text-center py-3 px-4 border-r border-[#006fc9] last:border-r-0 font-poppins"
              >
                {header === 'Priority' ? (
                  <div className="flex items-center justify-center">
                    <img
                      src="/images/img_iconamoonflagfill.svg"
                      alt="Priority Flag"
                      className="w-4 h-4 mr-2"
                    />
                    Priority
                  </div>
                ) : (
                  header
                )}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {tickets.map((ticket, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-[#f1f7fe]' : 'bg-white'}>
              {/* Ticket No */}
              <td className="text-[16px] font-medium leading-[24px] text-center py-3 px-4 text-[#5d5d5d] font-poppins">
                {ticket.ticketNo}
              </td>

              {/* Ticket Title */}
              <td className="text-[18px] font-medium leading-[22px] text-center py-3 px-4 text-[#454545] font-inter">
                {ticket.title}
              </td>

              {/* Status */}
              <td className="text-center py-3 px-4">
                <Button
                  variant={getStatusVariant(ticket.status)}
                  size="small"
                  className="min-w-[75px]"
                >
                  {ticket.status}
                </Button>
              </td>

              {/* SLA */}
              <td className="text-[16px] font-medium leading-[24px] text-center py-3 px-4 text-[#5d5d5d] font-poppins">
                {ticket.sla}
              </td>

              {/* Priority */}
              <td className="text-center py-3 px-4">
                <div className="flex items-center justify-center">
                  <img
                    src="/images/img_iconamoonflagfill_red_a700.svg"
                    alt="Priority Flag"
                    className="w-4 h-4 mr-2"
                  />
                  <span
                    className={`text-[16px] font-medium leading-[24px] font-poppins ${getPriorityColor(ticket.priority)}`}
                  >
                    {ticket.priority}
                  </span>
                </div>
              </td>

              {/* Req Date */}
              <td className="text-[16px] font-medium leading-[24px] text-center py-3 px-4 text-[#5d5d5d] font-poppins">
                {ticket.reqDate}
              </td>

              {/* Req Time */}
              <td className="text-[16px] font-medium leading-[24px] text-center py-3 px-4 text-[#5d5d5d] font-poppins">
                {ticket.reqTime}
              </td>

              {/* Req By */}
              <td className="text-[16px] font-medium leading-[24px] text-center py-3 px-4 text-[#5d5d5d] font-poppins">
                {ticket.reqBy}
              </td>

              {/* Ticket Owner */}
              <td className="text-[16px] font-medium leading-[24px] text-center py-3 px-4 font-poppins">
                <span className={ticket.ticketOwner === '-' ? 'text-[#42a0ee]' : 'text-[#5d5d5d]'}>
                  {ticket.ticketOwner}
                </span>
              </td>

              {/* Updated Date */}
              <td className="text-[16px] font-medium leading-[24px] text-center py-3 px-4 text-[#5d5d5d] font-poppins">
                {ticket.updatedDate}
              </td>

              {/* Updated Time */}
              <td className="text-[16px] font-medium leading-[24px] text-center py-3 px-4 text-[#5d5d5d] font-poppins">
                {ticket.updatedTime}
              </td>

              {/* Updated By */}
              <td className="text-[16px] font-medium leading-[24px] text-center py-3 px-4 text-[#5d5d5d] font-poppins">
                {ticket.updatedBy}
              </td>

              {/* Module */}
              <td className="text-[16px] font-medium leading-[24px] text-center py-3 px-4 text-[#5d5d5d] font-poppins">
                {ticket.module}
              </td>

              {/* Sub Module */}
              <td className="text-[16px] font-medium leading-[24px] text-center py-3 px-4 text-[#5d5d5d] font-poppins">
                {ticket.subModule}
              </td>

              {/* Icon */}
              <td className="text-[16px] font-medium leading-[24px] text-center py-3 px-4 text-[#5d5d5d] font-poppins">
                {ticket.icon}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;
