// src/pages/ticket-dashboard-customer-support/index.jsx
import React, { useState, useEffect } from 'react';
import Header from '../../../components/ui/Create_Tickets_components/Header';
import TicketOverviewCards from './components/TicketOverviewCards';
import TicketFilters from './components/TicketFilters';
import TicketTable from './components/TicketTable';
import QuickActionPanel from './components/QuickActionPanel';
import TicketTrendsChart from './components/TicketTrendsChart';
import { Search, Users } from 'lucide-react';

const TicketDashboardCustomerSupport = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [tickets, setTickets] = useState([]);
  const [ticketStats, setTicketStats] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    resolved: 0,
    closed: 0,
  });

  // Simulate fetching ticket data
  useEffect(() => {
    const mockTickets = [
      {
        id: 'TKT-001',
        title: 'Login Authentication Issue',
        description: 'User unable to login with correct credentials',
        status: 'open',
        priority: 'high',
        assignee: 'John Smith',
        customer: 'Alice Johnson',
        createdAt: '2024-01-15T10:30:00Z',
        updatedAt: '2024-01-15T10:30:00Z',
        module: 'User Management',
        subModule: 'Authentication',
      },
      {
        id: 'TKT-002',
        title: 'Payment Gateway Error',
        description: 'Credit card payment failing at checkout',
        status: 'in-progress',
        priority: 'critical',
        assignee: 'Sarah Wilson',
        customer: 'Bob Brown',
        createdAt: '2024-01-14T14:20:00Z',
        updatedAt: '2024-01-15T09:15:00Z',
        module: 'Billing',
        subModule: 'Payment Processing',
      },
      {
        id: 'TKT-003',
        title: 'Report Generation Slow',
        description: 'Monthly reports taking too long to generate',
        status: 'resolved',
        priority: 'medium',
        assignee: 'Mike Davis',
        customer: 'Carol White',
        createdAt: '2024-01-13T11:45:00Z',
        updatedAt: '2024-01-15T08:30:00Z',
        module: 'Reports',
        subModule: 'Analytics',
      },
      {
        id: 'TKT-004',
        title: 'API Rate Limit Exceeded',
        description: 'Third-party API integration hitting rate limits',
        status: 'open',
        priority: 'low',
        assignee: 'Lisa Garcia',
        customer: 'David Chen',
        createdAt: '2024-01-12T16:10:00Z',
        updatedAt: '2024-01-12T16:10:00Z',
        module: 'API',
        subModule: 'Integration',
      },
      {
        id: 'TKT-005',
        title: 'Email Notification Not Working',
        description: 'Users not receiving email notifications',
        status: 'closed',
        priority: 'medium',
        assignee: 'Tom Anderson',
        customer: 'Emma Taylor',
        createdAt: '2024-01-11T09:30:00Z',
        updatedAt: '2024-01-14T17:45:00Z',
        module: 'Settings',
        subModule: 'Notifications',
      },
    ];

    setTickets(mockTickets);

    // Calculate stats
    const stats = {
      total: mockTickets.length,
      open: mockTickets.filter((t) => t.status === 'open').length,
      inProgress: mockTickets.filter((t) => t.status === 'in-progress').length,
      resolved: mockTickets.filter((t) => t.status === 'resolved').length,
      closed: mockTickets.filter((t) => t.status === 'closed').length,
    };

    setTicketStats(stats);
  }, []);

  const filteredTickets =
    tickets?.filter((ticket) => {
      const matchesSearch =
        ticket?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        ticket?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        ticket?.customer?.toLowerCase()?.includes(searchTerm?.toLowerCase());

      const matchesFilter = selectedFilter === 'all' || ticket?.status === selectedFilter;

      return matchesSearch && matchesFilter;
    }) || [];

  const handleCreateTicket = () => {
    window.location.href = '/create-ticket';
  };

  const handleViewReports = () => {
    console.log('Viewing reports...');
  };

  const handleExportData = () => {
    console.log('Exporting data...');
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />

      {/* Main Content */}
      <main className="px-8 py-6">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-[24px] font-medium leading-[30px] text-black font-inter mb-2">
              Ticket Dashboard - Customer Support
            </h1>
            <p className="text-[14px] text-[#5d5d5d] font-inter">
              Monitor and manage customer support tickets
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search tickets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-[300px] border border-[#e7e7e7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b60b0] focus:border-transparent"
            />
          </div>
        </div>

        {/* Dashboard Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Navigation and Filters */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions */}
            <QuickActionPanel
              onCreateTicket={handleCreateTicket}
              onViewReports={handleViewReports}
              onExportData={handleExportData}
            />

            {/* Filters */}
            <TicketFilters
              selectedFilter={selectedFilter}
              onFilterChange={setSelectedFilter}
              ticketStats={ticketStats}
            />
          </div>

          {/* Right Content Area - Main Dashboard */}
          <div className="lg:col-span-3 space-y-6">
            {/* Overview Cards */}
            <TicketOverviewCards stats={ticketStats} />

            {/* Ticket Trends Chart */}
            <TicketTrendsChart />

            {/* Tickets Table */}
            <div className="bg-white rounded-lg shadow-sm border border-[#e7e7e7]">
              <div className="p-6 border-b border-[#e7e7e7]">
                <h2 className="text-[18px] font-medium text-black font-inter">
                  Recent Tickets ({filteredTickets?.length || 0})
                </h2>
              </div>
              <TicketTable tickets={filteredTickets} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TicketDashboardCustomerSupport;
