import React from 'react';
import SidebarNavigation from '../Navigation/SidebarNavigation';

interface LayoutProps {
  children: React.ReactNode;
  activeNavItem?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, activeNavItem }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SidebarNavigation activeItem={activeNavItem} />
      <div className="ml-[200px] w-[calc(100%-200px)] p-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;
