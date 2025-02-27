import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardTwo from './components/Dashboard/DashboardTwo';
import { SidebarNavigation } from '@edugo/ui-navigation';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <SidebarNavigation activeItem="dashboard" />
        <div className="main-content">
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