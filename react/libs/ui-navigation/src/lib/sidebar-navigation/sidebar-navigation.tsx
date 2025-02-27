
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar-navigation.css';

interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface SidebarNavigationProps {
  activeItem?: string;
}

export function SidebarNavigation({ activeItem }: SidebarNavigationProps) {
  const location = useLocation();
  const [expanded, setExpanded] = useState(true);
  const [sectionStates, setSectionStates] = useState({
    students: true,
    liveLessons: true,
    content: true
  });

  const toggleSection = (section: keyof typeof sectionStates) => {
    setSectionStates(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const isActive = (id: string) => {
    if (activeItem) {
      return activeItem === id;
    }
    return location.pathname.includes(id.toLowerCase());
  };

  const MainItems: NavItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      path: '/dashboard-two',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
        </svg>
      )
    },
    {
      id: 'account',
      label: 'My Account',
      path: '/account',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 'teaching-history',
      label: 'My Teaching History',
      path: '/teaching-history',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const StudentItems: NavItem[] = [
    {
      id: 'messages',
      label: 'My Messages',
      path: '/messages',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
        </svg>
      )
    },
    {
      id: 'students',
      label: 'My Students',
      path: '/students',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    }
  ];

  const LiveLessonItems: NavItem[] = [
    {
      id: 'calendar',
      label: 'My Calendar',
      path: '/calendar',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 'availability',
      label: 'My Availability',
      path: '/availability',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 'live-lessons',
      label: 'My Live Lessons',
      path: '/live-lessons',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
      )
    },
    {
      id: 'group-lessons',
      label: 'My Group Lessons',
      path: '/group-lessons',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    },
    {
      id: 'lesson-reports',
      label: 'My Lesson Reports',
      path: '/lesson-reports',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const ContentItems: NavItem[] = [
    {
      id: 'lessons',
      label: 'My Lessons',
      path: '/lessons',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      )
    },
    {
      id: 'courses',
      label: 'My Courses',
      path: '/courses',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      )
    },
    {
      id: 'library',
      label: 'Content Library',
      path: '/library',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
      )
    }
  ];

  const renderNavItem = (item: NavItem) => (
    <li key={item.id} className="mb-1">
      <Link
        to={item.path}
        className={`flex items-center px-4 py-2 rounded-lg text-sm ${
          isActive(item.id)
            ? 'bg-indigo-50 text-indigo-600 font-medium'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <span className="inline-flex items-center justify-center w-6 h-6 mr-3">
          {item.icon}
        </span>
        {expanded && <span>{item.label}</span>}
      </Link>
    </li>
  );

  return (
    <>
      <div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <div className="flex items-center">
              <img src="/assets/edugo-logo.svg" alt="edugo.ai" className="h-8" />
              {expanded && <span className="ml-2 text-xl font-semibold">edugo.ai</span>}
            </div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="p-1 rounded-md text-gray-500 hover:bg-gray-100"
            >
              {expanded ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="mb-6">
              {MainItems.map(renderNavItem)}
            </ul>

            <div className="mt-8 mb-2 px-4">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('students')}
              >
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {expanded ? 'STUDENTS' : 'ST'}
                </h3>
                {expanded && (
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-gray-500 transition-transform ${sectionStates.students ? 'rotate-0' : '-rotate-90'}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
            <ul className={`${!sectionStates.students && 'hidden'}`}>
              {StudentItems.map(renderNavItem)}
            </ul>

            <div className="mt-8 mb-2 px-4">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('liveLessons')}
              >
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {expanded ? 'MY LIVE LESSONS' : 'LL'}
                </h3>
                {expanded && (
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-gray-500 transition-transform ${sectionStates.liveLessons ? 'rotate-0' : '-rotate-90'}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
            <ul className={`${!sectionStates.liveLessons && 'hidden'}`}>
              {LiveLessonItems.map(renderNavItem)}
            </ul>

            <div className="mt-8 mb-2 px-4">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('content')}
              >
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {expanded ? 'MY CONTENT' : 'CT'}
                </h3>
                {expanded && (
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-gray-500 transition-transform ${sectionStates.content ? 'rotate-0' : '-rotate-90'}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
            <ul className={`${!sectionStates.content && 'hidden'}`}>
              {ContentItems.map(renderNavItem)}
            </ul>
          </nav>

          <div className="flex-shrink-0 flex items-center border-t p-4">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src="/assets/avatar.png" alt="User avatar" />
            </div>
            {expanded && (
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Joaquin Trainer</p>
                <p className="text-xs text-gray-500">Full Profile</p>
                <p className="text-xs text-gray-500">Europe/Berlin</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarNavigation;
