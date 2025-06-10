import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import LoginPage from './pages/Login';
import FAQPage from './pages/FAQ';
// Import page components

import GridIndex from './pages/Gridview/GridIndex';
import MyTickets from './pages/dashboard/MyTickets';
import CreateTicketPage from './pages/Create_Tickets/CreateTicket';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/MyTickets" element={<MyTickets />} />
        <Route path="/grid-view" element={<GridIndex />} />
        <Route path="/create-ticket" element={<CreateTicketPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
