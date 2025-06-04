import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import FAQPage from './pages/FAQ';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
