import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/MyTickets_components/Button';
import Chips from '../../components/ui/MyTickets_components/Chips';
import Tabs from '@/components/ui/FAQ_Components/Tabs';
import PageHeader from '@/components/ui/MyTickets_components/PageHeader';
import FilterSection from './FilterSection';
import '@styles/My_Tickets/index.css';

const TicketManagementDashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const tabs = [
    { label: 'My Tickets' },
    { label: "FAQ's" },
    { label: 'Trainings' },
    { label: 'New Requirement' },
  ];

  const ticketData = [
    {
      id: '33245',
      title: 'Unable to Generate Monthly Cash Flow Report',
      status: 'Assigned',
      sla: '01:00 Hrs',
      priority: 'High',
      reqDate: '11.02.2024',
      reqTime: '02:00 PM',
      reqBy: 'Admin',
      ticketOwner: 'John',
      updatedDate: '11.02.2024',
      updatedTime: '11:00 AM',
      updatedBy: 'Admin',
      module: 'Bank Statements',
      subModule: 'MT940',
      icon: '📄 MT940 Uploads',
    },
    {
      id: '33246',
      title: 'Unable to Generate Monthly Cash Flow Report',
      status: 'Assigned',
      sla: '01:00 Hrs',
      priority: 'High',
      reqDate: '11.02.2024',
      reqTime: '02:00 PM',
      reqBy: 'John',
      ticketOwner: '-',
      updatedDate: '11.02.2024',
      updatedTime: '11:00 AM',
      updatedBy: 'John',
      module: 'Bank Statements',
      subModule: 'MT940',
      icon: '📄 MT940 Uploads',
    },
    {
      id: '33247',
      title: 'Unable to Generate Monthly Cash Flow Report',
      status: 'Assigned',
      sla: '01:00 Hrs',
      priority: 'High',
      reqDate: '11.02.2024',
      reqTime: '02:00 PM',
      reqBy: 'Admin',
      ticketOwner: 'John',
      updatedDate: '11.02.2024',
      updatedTime: '11:00 AM',
      updatedBy: 'Admin',
      module: 'Bank Statements',
      subModule: 'MT940',
      icon: '📄 MT940 Uploads',
    },
    {
      id: '33248',
      title: 'Unable to Generate Monthly Cash Flow Report',
      status: 'Assigned',
      sla: '01:00 Hrs',
      priority: 'High',
      reqDate: '11.02.2024',
      reqTime: '02:00 PM',
      reqBy: 'John',
      ticketOwner: '-',
      updatedDate: '11.02.2024',
      updatedTime: '11:00 AM',
      updatedBy: 'John',
      module: 'Bank Statements',
      subModule: 'MT940',
      icon: '📄 MT940 Uploads',
    },
    {
      id: '33249',
      title: 'Unable to Generate Monthly Cash Flow Report',
      status: 'Closed',
      sla: '01:00 Hrs',
      priority: 'High',
      reqDate: '11.02.2024',
      reqTime: '02:00 PM',
      reqBy: 'Admin',
      ticketOwner: 'John',
      updatedDate: '11.02.2024',
      updatedTime: '11:00 AM',
      updatedBy: 'Admin',
      module: 'Bank Statements',
      subModule: 'MT940',
      icon: '📄 MT940 Uploads',
    },
    {
      id: '33250',
      title: 'Unable to Generate Monthly Cash Flow Report',
      status: 'Closed',
      sla: '01:00 Hrs',
      priority: 'High',
      reqDate: '11.02.2024',
      reqTime: '02:00 PM',
      reqBy: 'John',
      ticketOwner: '-',
      updatedDate: '11.02.2024',
      updatedTime: '11:00 AM',
      updatedBy: 'John',
      module: 'Bank Statements',
      subModule: 'MT940',
      icon: '📄 MT940 Uploads',
    },
  ];

  useEffect(() => {
    setTickets(ticketData);
  }, []);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedTickets = [...tickets].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setTickets(sortedTickets);
  };

  const getStatusChips = (status) => {
    const variant = status === 'Assigned' ? 'assigned' : status === 'Closed' ? 'closed' : 'default';
    return (
      <Chips variant={variant} size="small">
        {status}
      </Chips>
    );
  };

  const getPriorityChips = (priority) => {
    return (
      <div className="myflex items-center gap-2">
        <img
          src="/images/img_iconamoonflagfill_red_a700.svg"
          alt="priority flag"
          className="w-4 h-4"
        />
        <Chips variant="high" size="small">
          {priority}
        </Chips>
      </div>
    );
  };

  const handleTabChange = (index, tab) => {
    setActiveTab(index);
    if (tab.label === "FAQ's") navigate('/faq');
    else if (tab.label === 'Grid View') navigate('/grid-view');
    else if (tab.label === 'Create Case') navigate('/create-ticket');
  };

  return (
    <div className="my-tickets min-h-screen bg-gray-50 font-poppins">
      <PageHeader />

      {/* Tabs */}
      <div className="">
        <Tabs
          tabs={tabs}
          defaultActiveTab={0}
          onTabChange={(index, tab) => handleTabChange(index, tab)}
        />
      </div>

      {/* Filter section below tabs */}
      {activeTab === 0 && (
        <div className="mb-4">
          <FilterSection />
        </div>
      )}

      {/* My Tickets Table */}
      {activeTab === 0 && (
        <>
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('id')}>
                    Ticket No{' '}
                    {sortConfig.key === 'id' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">SLA</th>
                  <th className="px-4 py-2">Priority</th>
                  <th className="px-4 py-2">Req Date</th>
                  <th className="px-4 py-2">Req Time</th>
                  <th className="px-4 py-2">Req By</th>
                  <th className="px-4 py-2">Ticket Owner</th>
                  <th className="px-4 py-2">Updated Date</th>
                  <th className="px-4 py-2">Updated Time</th>
                  <th className="px-4 py-2">Updated By</th>
                  <th className="px-4 py-2">Module</th>
                  <th className="px-4 py-2">Sub Module</th>
                  <th className="px-4 py-2">Icon</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket, index) => (
                  <tr
                    key={ticket.id + index}
                    className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2">{ticket.id}</td>
                    <td className="px-4 py-2">{ticket.title}</td>
                    <td className="px-4 py-2">{getStatusChips(ticket.status)}</td>
                    <td className="px-4 py-2">{ticket.sla}</td>
                    <td className="px-4 py-2">{getPriorityChips(ticket.priority)}</td>
                    <td className="px-4 py-2">{ticket.reqDate}</td>
                    <td className="px-4 py-2">{ticket.reqTime}</td>
                    <td className="px-4 py-2">{ticket.reqBy}</td>
                    <td className="px-4 py-2">{ticket.ticketOwner}</td>
                    <td className="px-4 py-2">{ticket.updatedDate}</td>
                    <td className="px-4 py-2">{ticket.updatedTime}</td>
                    <td className="px-4 py-2">{ticket.updatedBy}</td>
                    <td className="px-4 py-2">{ticket.module}</td>
                    <td className="px-4 py-2">{ticket.subModule}</td>
                    <td className="px-4 py-2">{ticket.icon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
            <div>Showing {tickets.length} tickets</div>
            <div className="flex gap-2">
              <Button variant="outline" size="small" disabled>
                Previous
              </Button>
              <Button variant="outline" size="small" disabled>
                Next
              </Button>
            </div>
          </div>
        </>
      )}

      {/* New Requirement Form (Tab 4) */}
      {/* {activeTab === 3 && (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Raise New Requirement</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Title</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter title"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Module</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter module"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Sub Module</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter sub module"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Priority</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div className="flex justify-end">
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </div>
          </form>
        </div>
      )} */}
    </div>
  );
};

export default TicketManagementDashboard;
