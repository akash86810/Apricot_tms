import React from 'react'
import AdminHeader from '../../Admin/components/AdminHeader'
import Tabs from '../components/Tabs';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import '@styles/FAQ_css/FAQ.css';
const Roles = () => {

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
  return (
    <>
    <div className='roles'>
     <AdminHeader />
      <Tabs tabs={tabs} defaultActiveTab={defaultActiveTab} onTabChange={handleTabChange} />
      
      <div className="mb-6 ml-6 mt-10">
  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Role</label>
  <select
    id="role"
    name="role"
    className="w-[320px] h-[44px] rounded-md border border-gray-300 px-[14px] py-[10px] text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="">Role</option>
    
  </select>
</div>


     <div className="bg-blue-50 rounded-xl p-4 sm:p-6 max-h-[650px] overflow-y-auto no-scrollbar">
  {[
    'Dashboard',
    'Tickets',
    'Problem',
    'Change Requests',
    'Support Team',
    'Role',
    'Team',
    'Clients',
    'New Requirement',
    'Product Team',
    'Settings',
  ].map((section) => (
    <div key={section} className="mb-10">
      <p className="text-accent text-sm font-semibold mb-2">{section}</p>
      <div className="flex flex-wrap gap-4 text-sm text-gray-800">
        {[
          'Add',
          'Edit',
          'View',
          ...(section === 'Change Requests' || section === 'Support Team' || section === 'Role'
            ? ['Filter']
            : []),
          ...(section === 'Change Requests' ? ['Change Status'] : []),
        ].map((perm) => (
          <label key={perm} className="inline-flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" style={{ accentColor: '#0B60B0' }} />
            {perm}
          </label>
        ))}
      </div>
    </div>
  ))}
</div>


      </div>
    </>
  )
}

export default Roles