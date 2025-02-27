import React from 'react';

interface DashboardHeaderProps {
  username: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ username }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-textDark">Dashboard</h1>
      <p className="text-textMedium mt-2">
        Welcome back, <span className="font-medium">{username}</span>
      </p>
    </div>
  );
};

export default DashboardHeader;
