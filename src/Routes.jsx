import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import LoginPage from './pages/Login';
import FAQPage from './pages/FAQ';
// Import page components
import DashboardPage from './pages/Dashboard';
import GridIndex from './pages/Gridview/GridIndex';
import TicketDetail from './pages/Gridview/TicketDetail';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/grid-view" element={<GridIndex/>} />
        <Route path="/ticket" element={<TicketDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
