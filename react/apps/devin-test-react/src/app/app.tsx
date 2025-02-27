import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardTwo from './components/Dashboard/DashboardTwo';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard-two" replace />} />
        <Route path="/dashboard-two" element={<DashboardTwo />} />
        <Route path="/welcome" element={<NxWelcome title="devin-test-react" />} />
      </Routes>
    </Router>
  );
}

export default App;
