import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Import the component using a relative path
import DashboardTwo from './components/Dashboard/DashboardTwo';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard-two" replace />} />
        <Route path="/dashboard-two" element={<DashboardTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
