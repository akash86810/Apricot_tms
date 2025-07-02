import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../src/components/ui/MyTickets_components/Button';
import Chips from '../../../../src/components/ui/MyTickets_components/Chips';
import Tabs from '../../../../src/components/ui/FAQ_Components/Tabs';
import PageHeader from '../../../../src/components/ui/MyTickets_components/PageHeader';
import FilterSection from '../../../../src/pages/MyTickets/FilterSection';
import '../../../styles/My_Tickets/index.css';

const Ticket = () => {
  const [tickets, setTickets] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const tabs = [
    { label: 'Dashboard', key: 'dashboard', route: '/admin' },
    { label: 'Tickets', key: 'tickets', route: '/admintickets' },
    { label: 'Problem', key: 'problem', route: '/adminproblem' },
    { label: 'Change Requests', key: 'change-requests', route: '/adminchange-request' },
    { label: 'Support Team', key: 'support-team', route: '/support-team' },
    { label: 'Roles', key: 'roles', route: '/roles' },
    { label: 'Teams', key: 'teams' },
    { label: 'Clients', key: 'clients' },
    { label: 'New Requirement', key: 'new-requirement' },
    { label: 'Product Team', key: 'product-team' },
    // { label: 'FAQ', key: 'faq', route: '' },
    // { label: 'Grid View', key: 'grid', route: '' },
    // { label: 'Create Ticket', key: 'create', route: '/admincreate-ticket' },
  ];

  const ticketData = [
    {
      id: '33245',
      title: 'Unable to Generate Monthly Cash Flow Report',
      Assign: '*',
      status: 'Created',
      Stage: 'Implementation',
      RemainTime: '01:00 Hrs',
      priority: 'Critical',
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
      Assign: 'John',
      status: 'Assigned',
      Stage: 'Implementation',
      RemainTime: '01:00 Hrs',
      priority: 'low',
      reqDate: '11.02.2024',
      reqTime: '02:00 PM',
      reqBy: 'John',
      ticketOwner: 'John',
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
      Assign: 'John',
      status: 'Assigned',
      Stage: 'Implementation',
      RemainTime: '01:00 Hrs',
      priority: 'Medium',
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
      Assign: 'John',
      status: 'Assigned',
      Stage: 'Implementation',
      RemainTime: '01:00 Hrs',
      priority: 'high',
      reqDate: '11.02.2024',
      reqTime: '02:00 PM',
      reqBy: 'John',
      ticketOwner: 'John',
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
    const variant = ['assigned', 'created', 'closed'].includes(status.toLowerCase())
      ? status.toLowerCase()
      : 'default';
    return (
      <Chips variant={variant} size="small">
        {status}
      </Chips>
    );
  };

  const getPriorityChips = (priority) => {
    return (
      <div className="flex items-center gap-2">
        <img
          src="/images/img_iconamoonflagfill_red_a700.svg"
          alt="priority flag"
          className="w-4 h-4"
        />
        <Chips variant={priority.toLowerCase()} size="small">
          {priority}
        </Chips>
      </div>
    );
  };

  const handleTabChange = (index, tab) => {
    setActiveTab(index);
    if (tab.route) navigate(tab.route);
  };

  return (
    <div className="my-tickets h-screen overflow-hidden bg-gray-50 font-poppins flex flex-col">
      <PageHeader />

      <div>
        <Tabs
          tabs={tabs}
          defaultActiveTab={0}
          onTabChange={(index, tab) => handleTabChange(index, tab)}
        />
      </div>

      {tabs[activeTab].key === 'tickets' && (
        <>
          <div className="mb-4">
            <FilterSection />
          </div>

          <div className="bg-white rounded-lg shadow flex-grow overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('id')}>
                    Ticket No{' '}
                    {sortConfig.key === 'id' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="px-4 py-2">Ticket Title</th>
                  <th className="px-4 py-2">Assign</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Stage</th>
                  <th className="px-4 py-2">Remain Time</th>
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
                    <td className="px-4 py-2">{ticket.Assign}</td>
                    <td className="px-4 py-2">{getStatusChips(ticket.status)}</td>
                    <td className="px-4 py-2">{ticket.Stage}</td>
                    <td className="px-4 py-2">{ticket.RemainTime}</td>
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
    </div>
  );
};

export default Ticket;
