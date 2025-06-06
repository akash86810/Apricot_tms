import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Added import for navigation
import Tabs from '../../components/ui/MyTickets_components/tabNavigation';
import FilterSection from './FilterSection';
import TicketTable from './TicketTable';
import Modal from '../../components/ui/MyTickets_components/Modal';
import PageHeader from '@/components/ui/MyTickets_components/PageHeader';

const MyTickets = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeView, setActiveView] = useState('List View');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const navigate = useNavigate(); // Added navigation hook

  // Sample ticket data based on the Figma design
  const sampleTickets = [
    {
      ticketNo: '33245',
      title: 'Unable to Generate Monthly Cash Flow Report',
      status: 'Assigned',
      sla: '01:00 Hrs',
      priority: 'High',
      reqDate: '11.02.2024',
      reqTime: '02:00 pm',
      reqBy: 'Admin',
      ticketOwner: 'John',
      updatedDate: '11.02.2024',
      updatedTime: '11:00 am',
      updatedBy: 'Admin',
      module: 'Bank Statements',
      subModule: 'MT940',
      icon: 'MT940 Uploads',
    },
    {
      ticketNo: '33245',
      title: 'Unable to Generate Monthly Cash Flow Report',
      status: 'Assigned',
      sla: '01:00 Hrs',
      priority: 'High',
      reqDate: '11.02.2024',
      reqTime: '02:00 pm',
      reqBy: 'John',
      ticketOwner: '-',
      updatedDate: '11.02.2024',
      updatedTime: '11:00 am',
      updatedBy: 'John',
      module: 'Bank Statements',
      subModule: 'MT940',
      icon: 'MT940 Uploads',
    },
    {
      ticketNo: '33245',
      title: 'Unable to Generate Monthly Cash Flow Report',
      status: 'Assigned',
      sla: '01:00 Hrs',
      priority: 'High',
      reqDate: '11.02.2024',
      reqTime: '02:00 pm',
      reqBy: 'Admin',
      ticketOwner: 'John',
      updatedDate: '11.02.2024',
      updatedTime: '11:00 am',
      updatedBy: 'Admin',
      module: 'Bank Statements',
      subModule: 'MT940',
      icon: 'MT940 Uploads',
    },
    {
      ticketNo: '33245',
      title: 'Unable to Generate Monthly Cash Flow Report',
      status: 'Assigned',
      sla: '01:00 Hrs',
      priority: 'High',
      reqDate: '11.02.2024',
      reqTime: '02:00 pm',
      reqBy: 'John',
      ticketOwner: '-',
      updatedDate: '11.02.2024',
      updatedTime: '11:00 am',
      updatedBy: 'John',
      module: 'Bank Statements',
      subModule: 'MT940',
      icon: 'MT940 Uploads',
    },
    {
      ticketNo: '33245',
      title: 'Unable to Generate Monthly Cash Flow Report',
      status: 'Closed',
      sla: '01:00 Hrs',
      priority: 'High',
      reqDate: '11.02.2024',
      reqTime: '02:00 pm',
      reqBy: 'Admin',
      ticketOwner: 'John',
      updatedDate: '11.02.2024',
      updatedTime: '11:00 am',
      updatedBy: 'Admin',
      module: 'Bank Statements',
      subModule: 'MT940',
      icon: 'MT940 Uploads',
    },
    {
      ticketNo: '33245',
      title: 'Unable to Generate Monthly Cash Flow Report',
      status: 'Closed',
      sla: '01:00 Hrs',
      priority: 'High',
      reqDate: '11.02.2024',
      reqTime: '02:00 pm',
      reqBy: 'John',
      ticketOwner: '-',
      updatedDate: '11.02.2024',
      updatedTime: '11:00 am',
      updatedBy: 'John',
      module: 'Bank Statements',
      subModule: 'MT940',
      icon: 'MT940 Uploads',
    },
  ];

  const tabsData = [
    {
      label: 'My Tickets',
      content: (
        <div className="space-y-6">
          <FilterSection
            onFilterChange={setActiveFilter}
            onViewChange={setActiveView}
            onCreateCase={() => setIsCreateModalOpen(true)}
          />
          <TicketTable tickets={sampleTickets} />
        </div>
      ),
    },
    {
      label: "FAQ's",
      content: (
        <div className="p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-600">FAQ Section</h3>
          <p className="text-gray-500 mt-2">Frequently asked questions will be displayed here.</p>
        </div>
      ),
    },
    // {
    //   label: "FAQ's",
    //   content: (
    //     <div className="p-8 text-center">
    //       <h3 className="text-xl font-semibold text-gray-600">FAQ Section</h3>
    //       <p className="text-gray-500 mt-2">Additional FAQ content will be displayed here.</p>
    //     </div>
    //   ),
    // },
    {
      label: 'Trainings',
      content: (
        <div className="p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-600">Training Materials</h3>
          <p className="text-gray-500 mt-2">
            Training resources and materials will be displayed here.
          </p>
        </div>
      ),
    },
    {
      label: 'New Requirement',
      content: (
        <div className="p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-600">New Requirements</h3>
          <p className="text-gray-500 mt-2">Submit new requirements and feature requests here.</p>
        </div>
      ),
    },
  ];

  // Modified to navigate to FAQ page
  const handleTabChange = (index, tab) => {
    if (tab.label === "FAQ's") {
      navigate('/faq'); // Navigate to FAQ page route
    } else {
      console.log('Tab changed to:', tab.label);
    }
  };

  const handleCreateCase = () => {
    console.log('Creating new case...');
    // Add your create case logic here
    alert('Create Case functionality would be implemented here');
    setIsCreateModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <PageHeader />

      <main className="px-8 py-6">
        <Tabs
          tabs={tabsData}
          defaultActiveTab={0}
          onTabChange={handleTabChange}
          className="bg-white rounded-lg shadow-sm"
        />
      </main>

      {/* Create Case Modal */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Create New Case"
        size="large"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            Create a new support case. This functionality would include a form to capture case
            details.
          </p>
          <div className="flex justify-end gap-2 pt-4">
            <button
              onClick={() => setIsCreateModalOpen(false)}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleCreateCase}
              className="px-4 py-2 bg-[#006fc9] text-white rounded hover:bg-[#005ba3]"
            >
              Create Case
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MyTickets;
