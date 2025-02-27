import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardTwo from './components/Dashboard/DashboardTwo';
import { SidebarNavigation } from '@edugo/ui-navigation';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <SidebarNavigation activeItem="dashboard" />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardTwo />} />
            <Route path="/dashboard-two" element={<DashboardTwo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;