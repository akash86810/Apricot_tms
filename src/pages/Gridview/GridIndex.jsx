import React, { useState, useEffect } from 'react';
import Header from './Header';
import Tabs from '../../components/ui/FAQ_Components/Tabs';
import FilterSection from '../../pages/dashboard/FilterSection';
import TicketBoard from './TicketBoard';

const GridIndex = () => {
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample ticket data based on the Figma design
  const allTickets = [
    {
      id: 1,
      category: 'Bank Statements',
      ticketNumber: '#47392',
      title: 'Unable to Generate Monthly Cash Flow Report',
      description:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache,',
      fullDescription:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache, but the issue persists. This is affecting our monthly reporting process.',
      tag: 'MT940',
      status: 'Created',
      timestamp: null,
    },
    {
      id: 2,
      category: 'Bank Statements',
      ticketNumber: '#47392',
      title: 'Unable to Generate Monthly Cash Flow Report',
      description:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache,',
      fullDescription:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache, but the issue persists. This is affecting our monthly reporting process.',
      tag: 'MT940',
      status: 'Created',
      timestamp: null,
    },
    {
      id: 3,
      category: 'Bank Statements',
      ticketNumber: '#47392',
      title: 'Unable to Generate Monthly Cash Flow Report',
      description:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache,',
      fullDescription:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache, but the issue persists. This is affecting our monthly reporting process.',
      tag: 'MT940',
      status: 'Created',
      timestamp: null,
    },
    {
      id: 4,
      category: 'Bank Statements',
      ticketNumber: '#47392',
      title: 'Unable to Generate Monthly Cash Flow Report',
      description:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache,',
      fullDescription:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache, but the issue persists. This is affecting our monthly reporting process.',
      tag: 'MT940',
      status: 'Created',
      timestamp: null,
    },
    {
      id: 5,
      category: 'Bank Statements',
      ticketNumber: '#47392',
      title: 'Unable to Generate Monthly Cash Flow Report',
      description:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache,',
      fullDescription:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache, but the issue persists. This is affecting our monthly reporting process.',
      tag: 'MT940',
      status: 'Assigned',
      timestamp: '09 May, 2025 17:01',
    },
    {
      id: 6,
      category: 'Bank Statements',
      ticketNumber: '#47392',
      title: 'Unable to Generate Monthly Cash Flow Report',
      description:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache,',
      fullDescription:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache, but the issue persists. This is affecting our monthly reporting process.',
      tag: 'Cash Flow',
      status: 'Assigned',
      timestamp: '09 May, 2025 17:01',
    },
    {
      id: 7,
      category: 'Bank Statements',
      ticketNumber: '#47392',
      title: 'Unable to Generate Monthly Cash Flow Report',
      description:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache,',
      fullDescription:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache, but the issue persists. This is affecting our monthly reporting process.',
      tag: 'MT940',
      status: 'Assigned',
      timestamp: '09 May, 2025 17:01',
    },
    {
      id: 8,
      category: 'Bank Statements',
      ticketNumber: '#47392',
      title: 'Unable to Generate Monthly Cash Flow Report',
      description:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache,',
      fullDescription:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache, but the issue persists. This is affecting our monthly reporting process.',
      tag: 'MT940',
      status: 'WIP',
      timestamp: '09 May, 2025 17:01',
    },
    {
      id: 9,
      category: 'Bank Statements',
      ticketNumber: '#47392',
      title: 'Unable to Generate Monthly Cash Flow Report',
      description:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache,',
      fullDescription:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache, but the issue persists. This is affecting our monthly reporting process.',
      tag: 'MT940',
      status: 'WIP',
      timestamp: '09 May, 2025 17:01',
    },
    {
      id: 10,
      category: 'Bank Statements',
      ticketNumber: '#47392',
      title: 'Unable to Generate Monthly Cash Flow Report',
      description:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache,',
      fullDescription:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache, but the issue persists. This is affecting our monthly reporting process.',
      tag: 'MT940',
      status: 'WIP',
      timestamp: '09 May, 2025 17:01',
    },
    {
      id: 11,
      category: 'Bank Statements',
      ticketNumber: '#47392',
      title: 'Unable to Generate Monthly Cash Flow Report',
      description:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache,',
      fullDescription:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache, but the issue persists. This is affecting our monthly reporting process.',
      tag: 'MT940',
      status: 'WIP',
      timestamp: '09 May, 2025 17:01',
    },
    {
      id: 12,
      category: 'Bank Statements',
      ticketNumber: '#47392',
      title: 'Unable to Generate Monthly Cash Flow Report',
      description:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache,',
      fullDescription:
        'The system either hangs or returns an error message saying "Data fetch timeout." I have tried reloading the page and clearing the cache, but the issue persists. This is affecting our monthly reporting process.',
      tag: 'MT940',
      status: 'Closed',
      timestamp: '09 May, 2025 17:01',
    },
  ];

  React.useEffect(() => {
    setFilteredTickets(allTickets);
  }, []);

  const navigationTabs = [
    { label: 'dashboard', value: 'dashboard' },
    { label: 'Tickets', value: 'tickets' },
    { label: 'Problem', value: 'problem' },
    { label: 'Change Requests', value: 'changeRequests' },
    { label: 'Support Team', value: 'supportTeam' },
    { label: 'Roles', value: 'roles' },
    { label: 'Teams', value: 'teams' },
    { label: 'Clients', value: 'clients' },
    { label: 'New Requirement', value: 'newRequirement' },
    { label: 'Product Team', value: 'productTeam' },
  ];

  const handleTabChange = (tabIndex) => {
    console.log('Tab changed to:', navigationTabs[tabIndex].value);
  };

  const handleFilterChange = (filterValue) => {
    console.log('Filter changed to:', filterValue);
    // Implement filter logic here
  };

  const handleSearchChange = (searchValue) => {
    setSearchTerm(searchValue);
    console.log('Search term:', searchValue);
    // Implement search logic here
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />

      {/* Navigation Tabs */}
      <div className="bg-[#f6f6f6] border-b border-[#e7e7e7] px-8">
        <Tabs
          tabs={navigationTabs.map((tab, index) => ({
            label: tab.label,
            content: null,
          }))}
          defaultActiveTab={1} // Tickets tab is active
          onTabChange={handleTabChange}
        />
      </div>

      {/* Main Content */}
      <div className="p-8">
        <FilterSection onFilterChange={handleFilterChange} onSearchChange={handleSearchChange} />

        <div className="ticket-board-container">
          <TicketBoard tickets={filteredTickets} />
        </div>
      </div>
    </div>
  );
};

export default GridIndex;
