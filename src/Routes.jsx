import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import LoginPage from './pages/Login';
import FAQPage from './pages/FAQ';
// Import page components
import DashboardPage from './pages/Dashboard';
import GridIndex from './pages/Gridview/GridIndex';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/grid-view" element={<GridIndex/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
