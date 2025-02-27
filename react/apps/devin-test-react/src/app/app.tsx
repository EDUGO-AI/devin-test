import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardView from './views/DashboardView';
import NavigationDemoView from './views/demo/NavigationDemoView';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard-two" replace />} />
        <Route path="/dashboard-two" element={<DashboardView />} />
        <Route path="/navigation-demo" element={<NavigationDemoView />} />
      </Routes>
    </Router>
  );
}

export default App;
