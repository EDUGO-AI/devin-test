import React from 'react';
import SidebarNavigation from './SidebarNavigation';
import DashboardHeader from './DashboardHeader';
import ActionCards from './ActionCards';
import LessonsTable from './LessonsTable';

export const DashboardOne: React.FC = () => {
  // Mock username for the dashboard
  const username = 'John Doe';

  return (
    <div className="flex min-h-screen bg-bgLight">
      {/* Sidebar */}
      <SidebarNavigation />

      {/* Main content */}
      <div className="ml-[200px] flex-1 p-8">
        {/* Header */}
        <DashboardHeader username={username} />

        {/* Action Cards */}
        <ActionCards />

        {/* Lessons Table */}
        <LessonsTable />
      </div>
    </div>
  );
};

export default DashboardOne;
