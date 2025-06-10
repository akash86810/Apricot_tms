// src/pages/ticket-dashboard-customer-support/components/TicketTable.jsx
import React from 'react';
import { User, Calendar, AlertTriangle, Clock, CheckCircle, XCircle } from 'lucide-react';

const TicketTable = ({ tickets }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'open':
        return <AlertTriangle className="w-4 h-4" />;
      case 'in-progress':
        return <Clock className="w-4 h-4" />;
      case 'resolved':
        return <CheckCircle className="w-4 h-4" />;
      case 'closed':
        return <XCircle className="w-4 h-4" />;
      default:
        return <AlertTriangle className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'open':
        return 'bg-orange-100 text-orange-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!tickets || tickets?.length === 0) {
    return (
      <div className="p-8 text-center text-[#5d5d5d]">
        <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
        <p className="text-[16px] font-medium font-inter">No tickets found</p>
        <p className="text-[14px] font-inter mt-1">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-[#e7e7e7]">
          <tr>
            <th className="px-6 py-3 text-left text-[12px] font-medium text-[#5d5d5d] uppercase tracking-wider font-inter">
              Ticket ID
            </th>
            <th className="px-6 py-3 text-left text-[12px] font-medium text-[#5d5d5d] uppercase tracking-wider font-inter">
              Title & Description
            </th>
            <th className="px-6 py-3 text-left text-[12px] font-medium text-[#5d5d5d] uppercase tracking-wider font-inter">
              Status
            </th>
            <th className="px-6 py-3 text-left text-[12px] font-medium text-[#5d5d5d] uppercase tracking-wider font-inter">
              Priority
            </th>
            <th className="px-6 py-3 text-left text-[12px] font-medium text-[#5d5d5d] uppercase tracking-wider font-inter">
              Assignee
            </th>
            <th className="px-6 py-3 text-left text-[12px] font-medium text-[#5d5d5d] uppercase tracking-wider font-inter">
              Customer
            </th>
            <th className="px-6 py-3 text-left text-[12px] font-medium text-[#5d5d5d] uppercase tracking-wider font-inter">
              Created
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-[#e7e7e7]">
          {tickets?.map((ticket) => (
            <tr key={ticket?.id} className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-[14px] font-medium text-[#0b60b0] font-inter">
                  {ticket?.id}
                </div>
                <div className="text-[12px] text-[#5d5d5d] font-inter">
                  {ticket?.module}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-[14px] font-medium text-black font-inter mb-1">
                  {ticket?.title}
                </div>
                <div className="text-[12px] text-[#5d5d5d] font-inter line-clamp-2">
                  {ticket?.description}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(ticket?.status)}`}>
                  {getStatusIcon(ticket?.status)}
                  <span className="ml-1 capitalize">
                    {ticket?.status?.replace('-', ' ')}
                  </span>
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(ticket?.priority)}`}>
                  <span className="capitalize">
                    {ticket?.priority}
                  </span>
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <User className="w-4 h-4 text-[#5d5d5d] mr-2" />
                  <span className="text-[14px] text-black font-inter">
                    {ticket?.assignee}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-[14px] text-black font-inter">
                  {ticket?.customer}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-[#5d5d5d] mr-2" />
                  <span className="text-[12px] text-[#5d5d5d] font-inter">
                    {formatDate(ticket?.createdAt)}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;