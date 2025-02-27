import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Collapsible from '@radix-ui/react-collapsible';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

interface SidebarNavigationProps {
  activeItem?: string;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ activeItem }) => {
  const [openSections, setOpenSections] = React.useState({
    students: true,
    liveLessons: true,
    content: true
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const isActive = (itemName: string) => activeItem === itemName;

  return (
    <aside className="w-[200px] bg-sidebar min-h-screen fixed left-0 top-0 border-r border-border-light text-gray-700">
      <div className="h-[70px] flex items-center px-4 border-b border-border-light">
        <img src="/logo.svg" alt="edugo.ai" className="h-8" />
      </div>
      <NavigationMenu.Root className="flex flex-col w-full" orientation="vertical">
        <NavigationMenu.List className="flex flex-col w-full">
          <NavigationMenu.Item className="w-full">
            <Link 
              to="/dashboard-two" 
              className={`flex items-center px-4 py-2 hover:bg-gray-100 rounded-md my-1 ${isActive('dashboard') ? 'bg-[#1a1a3f] text-white rounded-md' : 'text-gray-700'}`}
            >
              <span className="w-6 h-6 mr-2 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-500">
                  <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm0 8h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm0-12h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z" 
                    fill="currentColor" />
                </svg>
              </span>
              Dashboard
            </Link>
          </NavigationMenu.Item>
          
          <NavigationMenu.Item className="w-full">
            <Link 
              to="/account" 
              className={`flex items-center px-4 py-2 hover:bg-gray-100 rounded-md my-1 ${isActive('account') ? 'bg-[#1a1a3f] text-white rounded-md' : 'text-gray-700'}`}
            >
              <span className="w-6 h-6 mr-2 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-500">
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" 
                    fill="currentColor" />
                </svg>
              </span>
              My Account
            </Link>
          </NavigationMenu.Item>
          
          <NavigationMenu.Item className="w-full">
            <Link 
              to="/teaching-history" 
              className={`flex items-center px-4 py-2 hover:bg-gray-100 rounded-md my-1 ${isActive('teaching-history') ? 'bg-[#1a1a3f] text-white rounded-md' : 'text-gray-700'}`}
            >
              <span className="w-6 h-6 mr-2 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-500">
                  <path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" 
                    fill="currentColor" />
                </svg>
              </span>
              My Teaching History
            </Link>
          </NavigationMenu.Item>
          
          {/* STUDENTS Section */}
          <div className="mt-4">
            <Collapsible.Root open={openSections.students}>
              <Collapsible.Trigger asChild>
                <button 
                  className="flex items-center justify-between w-full px-4 py-2 text-xs uppercase font-semibold text-gray-500"
                  onClick={() => toggleSection('students')}
                >
                  <span>STUDENTS</span>
                  {openSections.students ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </button>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <NavigationMenu.Item className="w-full">
                  <Link 
                    to="/messages" 
                    className={`flex items-center px-4 py-2 hover:bg-gray-100 rounded-md my-1 ${isActive('messages') ? 'bg-[#1a1a3f] text-white rounded-md' : 'text-gray-700'}`}
                  >
                    <span className="w-6 h-6 mr-2 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-500">
                        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" 
                          fill="currentColor" />
                      </svg>
                    </span>
                    My Messages
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="w-full">
                  <Link 
                    to="/students" 
                    className={`flex items-center px-4 py-2 hover:bg-gray-100 rounded-md my-1 ${isActive('students') ? 'bg-[#1a1a3f] text-white rounded-md' : 'text-gray-700'}`}
                  >
                    <span className="w-6 h-6 mr-2 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-500">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" 
                          fill="currentColor" />
                      </svg>
                    </span>
                    My Students
                  </Link>
                </NavigationMenu.Item>
              </Collapsible.Content>
            </Collapsible.Root>
          </div>
          
          {/* MY LIVE LESSONS Section */}
          <div>
            <Collapsible.Root open={openSections.liveLessons}>
              <Collapsible.Trigger asChild>
                <button 
                  className="flex items-center justify-between w-full px-4 py-2 text-xs uppercase font-semibold text-gray-500"
                  onClick={() => toggleSection('liveLessons')}
                >
                  <span>MY LIVE LESSONS</span>
                  {openSections.liveLessons ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </button>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <NavigationMenu.Item className="w-full">
                  <Link 
                    to="/calendar" 
                    className={`flex items-center px-4 py-2 hover:bg-gray-100 rounded-md my-1 ${isActive('calendar') ? 'bg-[#1a1a3f] text-white rounded-md' : 'text-gray-700'}`}
                  >
                    <span className="w-6 h-6 mr-2 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-500">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z" 
                          fill="currentColor" />
                      </svg>
                    </span>
                    My Calendar
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="w-full">
                  <Link 
                    to="/availability" 
                    className={`flex items-center px-4 py-2 hover:bg-gray-100 rounded-md my-1 ${isActive('availability') ? 'bg-[#1a1a3f] text-white rounded-md' : 'text-gray-700'}`}
                  >
                    <span className="w-6 h-6 mr-2 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-500">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" 
                          fill="currentColor" />
                      </svg>
                    </span>
                    My Availability
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="w-full">
                  <Link 
                    to="/live-lessons" 
                    className={`flex items-center px-4 py-2 hover:bg-gray-100 rounded-md my-1 ${isActive('live-lessons') ? 'bg-[#1a1a3f] text-white rounded-md' : 'text-gray-700'}`}
                  >
                    <span className="w-6 h-6 mr-2 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-500">
                        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" 
                          fill="currentColor" />
                      </svg>
                    </span>
                    My Live Lessons
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="w-full">
                  <Link 
                    to="/group-lessons" 
                    className={`flex items-center px-4 py-2 hover:bg-gray-100 rounded-md my-1 ${isActive('group-lessons') ? 'bg-[#1a1a3f] text-white rounded-md' : 'text-gray-700'}`}
                  >
                    <span className="w-6 h-6 mr-2 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-500">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" 
                          fill="currentColor" />
                      </svg>
                    </span>
                    My Group Lessons
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="w-full">
                  <Link 
                    to="/lesson-reports" 
                    className={`flex items-center px-4 py-2 hover:bg-gray-100 rounded-md my-1 ${isActive('lesson-reports') ? 'bg-[#1a1a3f] text-white rounded-md' : 'text-gray-700'}`}
                  >
                    <span className="w-6 h-6 mr-2 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-500">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" 
                          fill="currentColor" />
                      </svg>
                    </span>
                    My Lesson Reports
                  </Link>
                </NavigationMenu.Item>
              </Collapsible.Content>
            </Collapsible.Root>
          </div>
          
          {/* MY CONTENT Section */}
          <div>
            <Collapsible.Root open={openSections.content}>
              <Collapsible.Trigger asChild>
                <button 
                  className="flex items-center justify-between w-full px-4 py-2 text-xs uppercase font-semibold text-gray-500"
                  onClick={() => toggleSection('content')}
                >
                  <span>MY CONTENT</span>
                  {openSections.content ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </button>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <NavigationMenu.Item className="w-full">
                  <Link 
                    to="/lessons" 
                    className={`flex items-center px-4 py-2 hover:bg-gray-100 rounded-md my-1 ${isActive('lessons') ? 'bg-[#1a1a3f] text-white rounded-md' : 'text-gray-700'}`}
                  >
                    <span className="w-6 h-6 mr-2 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-500">
                        <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" 
                          fill="currentColor" />
                      </svg>
                    </span>
                    My Lessons
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="w-full">
                  <Link 
                    to="/courses" 
                    className={`flex items-center px-4 py-2 hover:bg-gray-100 rounded-md my-1 ${isActive('courses') ? 'bg-[#1a1a3f] text-white rounded-md' : 'text-gray-700'}`}
                  >
                    <span className="w-6 h-6 mr-2 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-500">
                        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" 
                          fill="currentColor" />
                      </svg>
                    </span>
                    My Courses
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="w-full">
                  <Link 
                    to="/content-library" 
                    className={`flex items-center px-4 py-2 hover:bg-gray-100 rounded-md my-1 ${isActive('content-library') ? 'bg-[#1a1a3f] text-white rounded-md' : 'text-gray-700'}`}
                  >
                    <span className="w-6 h-6 mr-2 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-500">
                        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z" 
                          fill="currentColor" />
                      </svg>
                    </span>
                    Content Library
                  </Link>
                </NavigationMenu.Item>
              </Collapsible.Content>
            </Collapsible.Root>
          </div>
        </NavigationMenu.List>
      </NavigationMenu.Root>
      
      <div className="absolute bottom-0 left-0 w-full p-4 border-t border-border-light">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 overflow-hidden">
            <img src="/avatar.jpg" alt="User" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-sm font-medium">Joaquin Trainer</div>
            <div className="text-xs text-gray-400">Edugo/Berlin</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarNavigation;
