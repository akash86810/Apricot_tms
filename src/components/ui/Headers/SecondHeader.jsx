import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from '../FAQ_Components/Tabs';
import PageHeader from '@/components/ui/MyTickets_components/PageHeader';
import FilterSection from '@/pages/Dashboard/FilterSection';


const SecondHeader = () => {
  const navigate = useNavigate();
        
    const tabs = [
    { label: 'My Tickets' },
    { label: "FAQ's" },
    { label: 'Trainings' },
    { label: 'New Requirement' },
  ];

  const handleTabChange = (tabIndex) => {
    console.log(`Switched to tab: ${tabs[tabIndex].label}`);
    switch (tabIndex) {
      case 0:
        navigate('/MyTickets');
        break;
      case 3:
        navigate('/trainings');
        break;
      case 4:
        navigate('/new-requirement');
        break;
      default:
        // For FAQ tabs (1 & 2), stay on current page
        break;
    }
  };
  return (
    <>
    <PageHeader/>
    <Tabs tabs={tabs} defaultActiveTab={1} onTabChange={handleTabChange} />
    <FilterSection/>
    </>
  )
}

export default SecondHeader