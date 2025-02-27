import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

// Mock data for navigation items
const navigationItems = [
  {
    section: 'Main',
    items: [
      { name: 'Dashboard', icon: '📊', path: '/dashboard-one', active: true },
      { name: 'Calendar', icon: '📅', path: '/calendar', active: false },
      { name: 'Messages', icon: '✉️', path: '/messages', active: false },
    ],
  },
  {
    section: 'Teaching',
    items: [
      { name: 'My Lessons', icon: '📚', path: '/lessons', active: false },
      { name: 'Resources', icon: '📁', path: '/resources', active: false },
    ],
  },
  {
    section: 'Account',
    items: [
      { name: 'Settings', icon: '⚙️', path: '/settings', active: false },
      { name: 'Help', icon: '❓', path: '/help', active: false },
    ],
  },
];

// Mock user data
const user = {
  name: 'John Doe',
  avatar: 'https://i.pravatar.cc/100',
  location: 'New York, USA',
};

export const SidebarNavigation: React.FC = () => {
  return (
    <div className="fixed h-full w-[200px] bg-primary flex flex-col">
      {/* Logo container */}
      <div className="h-[70px] flex items-center justify-center border-b border-gray-700">
        <h1 className="text-white font-bold text-xl">Edugo.ai</h1>
      </div>

      {/* Navigation menu */}
      <NavigationMenu.Root className="flex-grow py-4 px-2">
        <NavigationMenu.List className="space-y-6">
          {navigationItems.map((section) => (
            <div key={section.section}>
              <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-2 px-3">
                {section.section}
              </h2>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <NavigationMenu.Item key={item.name}>
                    <NavigationMenu.Link asChild>
                      <a
                        href={item.path}
                        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                          item.active
                            ? 'bg-indigo-800 text-white'
                            : 'text-gray-300 hover:bg-indigo-700 hover:text-white'
                        }`}
                      >
                        <span className="mr-3">{item.icon}</span>
                        {item.name}
                      </a>
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                ))}
              </ul>
            </div>
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>

      {/* User profile section */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <img
            src={user.avatar}
            alt="User avatar"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="text-white font-medium text-sm">{user.name}</p>
            <p className="text-gray-400 text-xs">{user.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;
