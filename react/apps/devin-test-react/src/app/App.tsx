
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardTwo from './components/Dashboard/DashboardTwo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Welcome to Devin Test React</h1>
        </header>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard-two" replace />} />
          <Route path="/dashboard-two" element={<DashboardTwo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
