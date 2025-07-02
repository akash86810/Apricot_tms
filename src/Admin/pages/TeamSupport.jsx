import React from 'react';
import AdminHeader from '../components/AdminHeader';
import { useNavigate } from 'react-router-dom';
import Tabs from '../components/Tabs';
import UserBasicDetailsTable from '../components/TeamSupportComponents/UserBasicDetailsTable';
import { useLocation } from 'react-router-dom';
const TeamSupport = () => {
    const location = useLocation();
    
    const navigate = useNavigate();

  const tabs = [
    { label: 'Dashboard', path: '/admin' },
    { label: 'Tickets', path: '/admintickets' },
    { label: 'Problem', path: '/adminproblem' },
    { label: 'Change Request', path: '/adminchange-request' },
    { label: 'Support Team', path: '/support-team' },
    { label: 'Roles', path: '/roles' },
    { label: 'Teams', path: '/teams' },
    { label: 'Clients', path: '/clients' },
    { label: 'New Request', path: '/new-request' },
    { label: 'Product Team', path: '/product-team' },
  ];
  const defaultActiveTab = tabs.findIndex((tab) => tab.path === location.pathname);
   
  const handleTabChange = (tabIndex) => {
    const selectedTab = tabs[tabIndex];
    if (selectedTab?.path) {
      navigate(selectedTab.path);
    } else {
      console.warn('No path defined for tab:', selectedTab?.label);
    }
  };

  const sampleUsers = [
  {
    userId: "Smalla",
    userName: "Smalla",
    firstName: "Surya",
    middleName: "Chandra",
    lastName: "Malla",
    role: "Support Team Member",
    salute: "Mr",
    email: "Malla@gmail.com",
    phone: "9372949***",
    whatsapp: "47289493",
    extension: "+91",
    validFrom: "01/01/2024",
    validTo: "31/01/2024",
    joiningDate: "01/01/2024",
    resignationDate: "-",
  },
];


  return (
    <>
    <div className='Teamsupport'>
     <AdminHeader />
      <Tabs tabs={tabs} defaultActiveTab={defaultActiveTab} onTabChange={handleTabChange} />

     <div className="bg-gray-100 min-h-screen">
      <UserBasicDetailsTable users={sampleUsers} />
    </div>
    </div>

    </>
  )
}

export default TeamSupport