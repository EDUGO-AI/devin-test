import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar-navigation.css';

export interface SidebarNavigationProps {
  activeItem?: string;
}

export function SidebarNavigation({ activeItem }: SidebarNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (item: string) => activeItem === item;

  const NavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', path: '/dashboard-two' },
    { id: 'account', label: 'My Account', icon: 'account', path: '#' },
    { id: 'teaching-history', label: 'My Teaching History', icon: 'history', path: '#' },
  ];

  const StudentItems = [
    { id: 'messages', label: 'My Messages', icon: 'messages', path: '#' },
    { id: 'students', label: 'My Students', icon: 'students', path: '#' },
  ];

  const LiveLessonItems = [
    { id: 'calendar', label: 'My Calendar', icon: 'calendar', path: '#' },
    { id: 'availability', label: 'My Availability', icon: 'availability', path: '#' },
    { id: 'live-lessons', label: 'My Live Lessons', icon: 'live', path: '#' },
    { id: 'group-lessons', label: 'My Group Lessons', icon: 'group', path: '#' },
    { id: 'reports', label: 'My Lesson Reports', icon: 'reports', path: '#' },
  ];

  const ContentItems = [
    { id: 'lessons', label: 'My Lessons', icon: 'lessons', path: '#' },
    { id: 'courses', label: 'My Courses', icon: 'courses', path: '#' },
    { id: 'library', label: 'Content Library', icon: 'library', path: '#' },
  ];

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'dashboard':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3H3V10H10V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 3H14V10H21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 14H14V21H21V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 14H3V21H10V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'account':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'history':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.05078 11.0002C3.27939 8.80966 4.30746 6.76518 5.93254 5.27208C7.55763 3.77897 9.6747 2.93296 11.8847 2.88768C14.0946 2.84239 16.2493 3.60067 17.9361 5.02388C19.6229 6.4471 20.7279 8.43469 21.0418 10.6125C21.3557 12.7904 20.8559 15.0041 19.641 16.8295C18.426 18.6549 16.5782 19.9715 14.4307 20.5223C12.2833 21.073 10.0121 20.8239 8.03639 19.8191C6.0607 18.8143 4.51339 17.1226 3.68542 15.0502" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'messages':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'students':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'calendar':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L19.0711 7L19.0711 17L12 22L4.92893 17L4.92893 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
    }
  };

  const renderNavItem = (item: any) => (
    <li key={item.id} className="mb-1">
      <Link
        to={item.path}
        className={`flex items-center py-2 px-4 rounded-md text-sm ${
          isActive(item.id)
            ? 'bg-indigo-50 text-indigo-600 font-medium'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        <span className="inline-flex items-center justify-center w-6 h-6 mr-3">
          {renderIcon(item.icon)}
        </span>
        {item.label}
      </Link>
    </li>
  );

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        className="md:hidden fixed top-4 left-4 z-40 p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Sidebar for mobile */}
      <div 
        className={`fixed inset-0 flex z-30 md:hidden transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setIsMobileMenuOpen(false)}></div>

        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center px-4 mb-6">
              <img
                className="h-8"
                src="/assets/edugo-logo.svg"
                alt="edugo.ai"
              />
            </div>

            <nav className="sidebar-nav">
              <ul>
                {NavItems.map(renderNavItem)}
              </ul>

              <div className="mt-8 mb-2 px-4">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  STUDENTS
                </h3>
              </div>
              <ul>
                {StudentItems.map(renderNavItem)}
              </ul>

              <div className="mt-8 mb-2 px-4">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  MY LIVE LESSONS
                </h3>
              </div>
              <ul>
                {LiveLessonItems.map(renderNavItem)}
              </ul>

              <div className="mt-8 mb-2 px-4">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  MY CONTENT
                </h3>
              </div>
              <ul>
                {ContentItems.map(renderNavItem)}
              </ul>
            </nav>
          </div>

          <div className="flex-shrink-0 flex items-center border-t p-4">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src="/assets/avatar.png" alt="User avatar" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Joaquin Trainer</p>
              <p className="text-xs text-gray-500">Full Profile</p>
              <p className="text-xs text-gray-500">Europe/Berlin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar for desktop */}
      <div className="hidden md:flex md:flex-col md:fixed md:inset-y-0 md:w-64 md:border-r md:border-gray-200 md:bg-white">
        <div className="flex items-center h-16 px-6 border-b border-gray-200">
          <img
            className="h-8"
            src="/assets/edugo-logo.svg"
            alt="edugo.ai"
          />
        </div>

        <div className="flex-1 flex flex-col overflow-y-auto">
          <nav className="flex-1 py-4 sidebar-nav">
            <ul>
              {NavItems.map(renderNavItem)}
            </ul>

            <div className="mt-8 mb-2 px-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                STUDENTS
              </h3>
            </div>
            <ul>
              {StudentItems.map(renderNavItem)}
            </ul>

            <div className="mt-8 mb-2 px-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                MY LIVE LESSONS
              </h3>
            </div>
            <ul>
              {LiveLessonItems.map(renderNavItem)}
            </ul>

            <div className="mt-8 mb-2 px-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                MY CONTENT
              </h3>
            </div>
            <ul>
              {ContentItems.map(renderNavItem)}
            </ul>
          </nav>
        </div>

        <div className="flex-shrink-0 flex items-center border-t p-4">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src="/assets/avatar.png" alt="User avatar" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Joaquin Trainer</p>
            <p className="text-xs text-gray-500">Full Profile</p>
            <p className="text-xs text-gray-500">Europe/Berlin</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarNavigation;