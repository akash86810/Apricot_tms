import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import LoginPage from './pages/Login';
import FAQPage from './pages/FAQ';
// Import page components

import GridIndex from './pages/Gridview/GridIndex';
// import MyTickets from './pages/dashboard/MyTickets';
import TicketDetail from './pages/Gridview/TicketDetail';
import SecondHeader from './components/ui/Headers/SecondHeader';
import CreateTicketPage from './pages/Create_Tickets/CreateTicket';
import TicketManagementDashboard from './pages/MyTickets';
import NewRequirements from './pages/NewRequirements/NewRequirements';
// import AdminHeader from '../../Apricot_tms/src/Admin/components/AdminHeader';
import Dashboard from './Admin/pages/Dashboard';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/faq" element={<FAQPage />} />
        {/* <Route path="/MyTickets" element={<MyTickets />} /> */}
        <Route path="/grid-view" element={<GridIndex />} />
        <Route path="/ticket/:ticketId" element={<TicketDetail />} />
        <Route path="secondheader" element={<SecondHeader />} />

        <Route path="/create-ticket" element={<CreateTicketPage />} />
        <Route path="/dashboard" element={<TicketManagementDashboard />} />
        <Route path="/new-requirement" element={<NewRequirements/>} />
            {/* admin side */}

        <Route path="/admin" element={<Dashboard/>} />
        
        

      </Routes>
    </Router>
  );
};

export default AppRoutes;
