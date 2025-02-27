import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardView from './views/DashboardView';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard-two" replace />} />
        <Route path="/dashboard-two" element={<DashboardView />} />
      </Routes>
    </Router>
  );
}

export default App;
