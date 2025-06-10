// src/pages/ticket-dashboard-customer-support/components/TicketTrendsChart.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp } from 'lucide-react';

const TicketTrendsChart = () => {
  // Mock data for ticket trends
  const trendData = [
    { date: 'Jan 1', open: 12, resolved: 8, created: 15 },
    { date: 'Jan 2', open: 15, resolved: 10, created: 18 },
    { date: 'Jan 3', open: 18, resolved: 12, created: 20 },
    { date: 'Jan 4', open: 14, resolved: 16, created: 12 },
    { date: 'Jan 5', open: 20, resolved: 14, created: 25 },
    { date: 'Jan 6', open: 16, resolved: 18, created: 16 },
    { date: 'Jan 7', open: 22, resolved: 20, created: 28 }
  ];

  const priorityData = [
    { priority: 'Critical', count: 3, color: '#ef4444' },
    { priority: 'High', count: 8, color: '#f97316' },
    { priority: 'Medium', count: 12, color: '#eab308' },
    { priority: 'Low', count: 6, color: '#22c55e' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Ticket Trends Line Chart */}
      <div className="bg-white rounded-lg shadow-sm border border-[#e7e7e7] p-6">
        <div className="flex items-center mb-4">
          <TrendingUp className="w-5 h-5 text-[#0b60b0] mr-2" />
          <h3 className="text-[16px] font-medium text-black font-inter">
            Ticket Trends (Last 7 Days)
          </h3>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12, fill: '#5d5d5d' }}
                stroke="#e7e7e7"
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#5d5d5d' }}
                stroke="#e7e7e7"
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e7e7e7',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="created" 
                stroke="#0b60b0" 
                strokeWidth={2}
                name="Created"
                dot={{ fill: '#0b60b0', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="resolved" 
                stroke="#22c55e" 
                strokeWidth={2}
                name="Resolved"
                dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="open" 
                stroke="#f97316" 
                strokeWidth={2}
                name="Open"
                dot={{ fill: '#f97316', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Priority Distribution Bar Chart */}
      <div className="bg-white rounded-lg shadow-sm border border-[#e7e7e7] p-6">
        <div className="flex items-center mb-4">
          <div className="w-5 h-5 bg-gradient-to-r from-red-500 to-green-500 rounded mr-2"></div>
          <h3 className="text-[16px] font-medium text-black font-inter">
            Priority Distribution
          </h3>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={priorityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="priority" 
                tick={{ fontSize: 12, fill: '#5d5d5d' }}
                stroke="#e7e7e7"
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#5d5d5d' }}
                stroke="#e7e7e7"
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e7e7e7',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Bar 
                dataKey="count" 
                fill={(entry) => entry?.color || '#0b60b0'}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend */}
        <div className="flex justify-center mt-4 space-x-4">
          {priorityData?.map((item, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: item?.color }}
              ></div>
              <span className="text-[12px] text-[#5d5d5d] font-inter">
                {item?.priority} ({item?.count})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketTrendsChart;