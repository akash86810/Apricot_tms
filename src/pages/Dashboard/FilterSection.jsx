import React, { useState } from 'react';
import Chip from '../../components/ui/MyTickets_components/Chip';
import InputField from '../../components/ui/MyTickets_components/TicketInputField';
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

  //   const handleViewChange = (view) => {
  //     setActiveView(view);
  //   if (view === 'Grid View') {
  //     navigate('/grid-view');  // navigates to Grid View page route
  //   } else if (view === 'List View') {
  //     navigate('/list-view');  // example for another view
  //   }
  // };

  const handleViewChange = (view) => {
    setActiveView(view); // 🟢 Update the active view locally
    if (view === 'Grid View') {
      navigate('/grid-view');
    } else if (view === 'List View') {
      navigate('/MyTickets'); // 🟢 Replace with your actual "List View" route
    }
  };

  return (
    <div className="space-y-4">
      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2">
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

      {/* Search and Actions */}
      <div className="flex items-center justify-between gap-4">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <InputField
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            icon="/images/img_search.svg"
            className="bg-[#f6f6f6] border-[#d1d1d1]"
          />
        </div>

        {/* View Controls and Create Button */}
        <div className="flex items-center gap-2">
          {/* List View Button */}
          <Button
            onClick={() => handleViewChange('List View')}
            variant={activeView === 'List View' ? 'secondary' : 'outline'}
            size="medium"
            className="flex items-center gap-2"
          >
            <img src="/images/img_icroundlist.svg" alt="List View" className="w-5 h-5" />
            List View
          </Button>

          {/* Grid View Button */}
          <Button
            type="button"
            onClick={() => handleViewChange('Grid View')}
            variant={activeView === 'Grid View' ? 'secondary' : 'outline'}
            size="medium"
            className="flex items-center gap-2"
          >
            <img
              src="/images/img_antdesignproductoutlined.svg"
              alt="Grid View"
              className="w-5 h-5"
            />
            Grid View
          </Button>

          {/* Create Case Button */}
          <Button
            onClick={onCreateCase}
            variant="primary"
            size="medium"
            className="bg-[#006fc9] hover:bg-[#005ba3]"
          >
            Create Case
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
