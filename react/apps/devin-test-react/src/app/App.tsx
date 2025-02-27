import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardTwo from './components/Dashboard/DashboardTwo';
import { SidebarNavigation } from '@edugo/ui-navigation';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app bg-gray-100 min-h-screen">
        <SidebarNavigation activeItem="dashboard" />
        <div className="main-content p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard-two" replace />} />
            <Route path="/dashboard-two" element={<DashboardTwo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;