import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Import the component using a relative path
import DashboardTwo from './components/Dashboard/DashboardTwo';
import PrepareCallTest from './components/UI/PrepareCallTest';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard-two" replace />} />
        <Route path="/dashboard-two" element={<DashboardTwo />} />
        <Route path="/prepare-call-test" element={<PrepareCallTest />} />
      </Routes>
    </Router>
  );
}

export default App;
