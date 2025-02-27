import React from 'react';
import SidebarNavigation from '../Navigation/SidebarNavigation';

interface LayoutProps {
  children: React.ReactNode;
  activeNavItem?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, activeNavItem }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'white' }}>
      <SidebarNavigation activeItem={activeNavItem} />
      <div style={{ marginLeft: '200px', width: 'calc(100% - 200px)', padding: '1.5rem' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
