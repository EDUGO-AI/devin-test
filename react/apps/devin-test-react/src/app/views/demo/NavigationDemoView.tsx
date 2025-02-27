import React from 'react';
import { SidebarNavigation } from '@devin-test/ui-navigation-lib';

/**
 * NavigationDemoView
 * 
 * This component demonstrates the explicit usage of both the SidebarNavigation component
 * from the shared ui-navigation library and the DashboardTwo component.
 * 
 * It's created specifically to show how components can be imported from different
 * locations in the NX monorepo structure.
 */
export function NavigationDemoView() {
  return (
    <div className="flex">
      {/* Import SidebarNavigation directly from the shared library */}
      <SidebarNavigation activeItem="dashboard" />
      
      {/* Content area with proper margin to account for sidebar width */}
      <div className="ml-[200px] w-[calc(100%-200px)]">
        {/* Import DashboardTwo component directly */}
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Navigation Demo View</h1>
          <p className="mb-6">
            This view demonstrates importing both the SidebarNavigation component from the 
            shared ui-navigation library and the DashboardTwo component.
          </p>
          
          {/* We're extracting the main content from DashboardTwo to avoid duplicate sidebars */}
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <h2 className="text-lg font-semibold mb-2">Dashboard Content:</h2>
            <div className="p-4">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-gray-600 mt-2">Welcome, Joaquin</p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center justify-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4V20M4 12H20" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-primary font-medium">Create Lesson</span>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center justify-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="#4F46E5" strokeWidth="2"/>
                      <path d="M10 8L16 12L10 16V8Z" fill="#4F46E5"/>
                    </svg>
                  </div>
                  <span className="text-primary font-medium">Start Videocall</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationDemoView;
