// src/pages/ticket-dashboard-customer-support/components/TicketOverviewCards.jsx
import React from 'react';
import { FileText, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const TicketOverviewCards = ({ stats }) => {
  const cards = [
    {
      title: 'Total Tickets',
      value: stats?.total || 0,
      icon: FileText,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Open Tickets',
      value: stats?.open || 0,
      icon: AlertCircle,
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    {
      title: 'In Progress',
      value: stats?.inProgress || 0,
      icon: Clock,
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    },
    {
      title: 'Resolved',
      value: stats?.resolved || 0,
      icon: CheckCircle,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Closed',
      value: stats?.closed || 0,
      icon: XCircle,
      color: 'bg-gray-500',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {cards?.map((card, index) => {
        const IconComponent = card?.icon;
        return (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-[#e7e7e7] p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] font-medium text-[#5d5d5d] font-inter uppercase tracking-wide">
                  {card?.title}
                </p>
                <p className={`text-[24px] font-bold font-inter mt-1 ${card?.textColor}`}>
                  {card?.value}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${card?.bgColor}`}>
                <IconComponent className={`w-6 h-6 text-white ${card?.color}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TicketOverviewCards;