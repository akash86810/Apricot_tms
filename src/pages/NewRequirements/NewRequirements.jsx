import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import PageHeader from '@/components/ui/MyTickets_components/PageHeader';
import Tabs from '../../components/ui/FAQ_Components/Tabs';
import { Plus } from 'lucide-react';
// import CreateRequirementModal from '@/components/modals/CreateRequirementModal';
import CreateRequirementModal from './CreateRequirementModal';

const NewRequirements = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    { label: 'My Tickets', path: '/MyTickets' },
    { label: "FAQ's", path: '/faq' },
    { label: 'Trainings', path: '/trainings' },
    { label: 'New Requirement', path: '/new-requirement' },
  ];

  const activeTabIndex = tabs.findIndex(tab => tab.path === location.pathname);

  const handleTabChange = (tabIndex) => {
    navigate(tabs[tabIndex].path);
  };

  return (
    <>
      <PageHeader />
      <Tabs tabs={tabs} defaultActiveTab={activeTabIndex} onTabChange={handleTabChange} />

      <div className="bg-background-gray-light px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Req No */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-800">Req No</label>
          <input
            type="text"
            placeholder="Req No"
            className="w-full sm:w-[320px] h-10 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm"
          />
        </div>

        {/* Requirement Description */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-800">Requirement Description</label>
          <textarea
            placeholder="Requirements"
            className="w-full xl:w-[1082px] h-24 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm resize-none"
          />
        </div>

        {/* Attachment Section */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-800">Attachment</label>
          <div
            className="flex items-center w-full sm:w-[320px] h-[37px] gap-2 rounded-full border border-[#D0D5DD] bg-[#EFEFEF] px-[14px] py-[10px] cursor-pointer"
          >
            <Plus size={16} className="text-gray-600" />
            <span className="text-sm text-gray-700">Add Attachment</span>
          </div>
        </div>

        {/* Create Requirement Button */}
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-[164px] h-[36px] rounded-md bg-[#006FC9] text-white text-sm font-medium py-2"
          >
            Create Requirement
          </button>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto mt-8">
          <table className="w-full xl:w-[1282px] min-w-[800px] border-collapse">
            <thead>
              <tr className="bg-[#006FC9] text-white text-sm">
                <th className="px-4 py-2 text-left">Req No</th>
                <th className="px-4 py-2 text-left">Requirement Description</th>
                <th className="px-4 py-2 text-left">Created By</th>
                <th className="px-4 py-2 text-left">Created Date</th>
                <th className="px-4 py-2 text-left">Created Time</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {[1, 2, 3].map((no) => (
                <tr key={no} className="border-b border-gray-200">
                  <td className="px-4 py-2">{no}</td>
                  <td className="px-4 py-2">
                    We need new requirement in bank statements to filter bank
                  </td>
                  <td className="px-4 py-2">Admin</td>
                  <td className="px-4 py-2">11/02/2024</td>
                  <td className="px-4 py-2">11:00 AM</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Mount */}
      <CreateRequirementModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default NewRequirements;
