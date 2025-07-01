import React, { useState } from 'react';
import Chip from '../../components/ui/MyTickets_components/Chip';
// import InputField from '../../components/ui/MyTickets_components/TicketInputField';
import Button from '../../components/ui/MyTickets_components/ActionButton';
import { useNavigate } from 'react-router-dom';

const FilterSection = ({ onFilterChange, onViewChange, onCreateCase }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeView, setActiveView] = useState('List View');

  const filterOptions = [
    'All',
    'Created',
    'Resolved',
    'Last Week',
    'SLA Breach',
    'Change Requests',
  ];

  const navigate = useNavigate();

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (onFilterChange) {
      onFilterChange(filter);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleViewChange = (view) => {
    setActiveView(view);
    if (view === 'Grid View') {
      navigate('/grid-view');
    } else if (view === 'List View') {
      navigate('/dashboard'); // 🟢 Replace with your actual "List View" route
    } else if (view === 'Create Case') {
      navigate('/Create-ticket'); // 🟢 Replace with your actual "List View" route
    }
  };

  return (
    <div className="flex justify-between items-center flex-wrap gap-4 py-5 ml-6">
      {/* Filters Section */}
      <div className="flex flex-nowrap gap-2 overflow-x-auto">
        {filterOptions.map((filter) => (
          <Chip
            key={filter}
            selected={activeFilter === filter}
            onClick={() => handleFilterClick(filter)}
            className="cursor-pointer"
          >
            {filter}
          </Chip>
        ))}
      </div>

      {/* Search and Actions Section */}
      <div className="flex flex-wrap gap-2 items-center mr-8">
        {/* Search Field */}
        <div className="flex-1 max-w-md">
          {/* <InputField
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            icon="/images/img_search.svg"
            className="bg-[#f6f6f6] border-[#d1d1d1]"
          /> */}
        </div>

        {/* View Buttons */}
        <div className="flex justify-center items-center">
          <Button
            onClick={() => handleViewChange('List View')}
            variant={activeView === 'List View' ? 'secondary' : 'outline'}
            size="medium"
            className="flex items-center"
          >
            <img src="/images/img_icroundlist.svg" alt="List View" className="w-5 h-5" />
            List View
          </Button>

          <Button
            onClick={() => handleViewChange('Grid View')}
            variant={activeView === 'Grid View' ? 'secondary' : 'outline'}
            size="medium"
            className="flex items-center"
          >
            <img
              src="/images/img_antdesignproductoutlined.svg"
              alt="Grid View"
              className="w-5 h-5"
            />
            Grid View
          </Button>
        </div>

        {/* Create Case */}
        <Button
          onClick={() => handleViewChange('Create Case')}
          variant="primary"
          size="medium"
          className="bg-[#006fc9] hover:bg-[#005ba3]"
        >
          Create Ticket
        </Button>
      </div>
    </div>
  );
};

export default FilterSection;
