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
// import NewRequirements from './pages/NewRequirements/NewRequirements';
import AdminCreateTicketPage from './pages/Create_Tickets/admin Create_tickets/AdminCreateTicket';
// import AdminHeader from '../../Apricot_tms/src
// /Admin/components/AdminHeader';
import Dashboard from './Admin/pages/Dashboard';
import TeamSupport from './Admin/pages/TeamSupport';

// import NewRequirements from './Admin/pages/NewRequirements';
// import AdminLogin from './Admin/pages/AdminLogin/AdminLogin';
import Adminlogin from './Admin/pages/AdminLogin/index';
import AddUser from './Admin/components/TeamSupportComponents/AddUser';
import Roles from './Admin/pages/Roles';
import Ticket from '../src/Admin/pages/Tickets/Tickets';
import Problem from '../src/Admin/pages/Problems/problem';
import Requests from './Admin/pages/Change Requests/Change_Requests';
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
        {/* <Route path="/new-requirement" element={<NewRequirements />} /> */}
        {/* admin side */}

        <Route path="/admin" element={<Dashboard />} />
        <Route path="/support-team" element={<TeamSupport />} />
        <Route path="/roles" element={<Roles />} />

        <Route path="/admin-create-ticket" element={<AdminCreateTicketPage />} />
        {/* <Route path="/add-user" element={<AddUser />} /> */}
        <Route path="/admintickets" element={<Ticket />} />
        <Route path="/adminproblem" element={<Problem />} />
        <Route path="/adminchange-request" element={<Requests />} />

        {/* <Route path="/admin-login" element={<AdminLogin />} /> */}
        <Route path="/adminlogin" element={<Adminlogin />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
