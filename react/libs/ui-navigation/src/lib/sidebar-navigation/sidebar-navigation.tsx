import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home, User, BookOpen, MessageSquare, Users, Calendar,
  Clock, FileText, BookMarked, PlusCircle, Layout
} from 'lucide-react';
import './sidebar-navigation.css';

interface SidebarNavigationProps {
  activeItem?: string;
}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ 
  activeItem = 'dashboard' 
}) => {
  const [active, setActive] = useState(activeItem);
  const location = useLocation();

  const handleItemClick = (item: string) => {
    setActive(item);
  };

  return (
    <div className="sidebar-navigation bg-indigo-900 text-white w-64 min-h-screen flex flex-col">
      <div className="logo-container p-6 border-b border-indigo-800">
        <div className="logo text-2xl font-bold">edugoal</div>
      </div>

      <div className="flex-grow">
        <div className="menu-section mt-6">
          <ul>
            <li>
              <Link 
                to="/dashboard" 
                className={`menu-item ${active === 'dashboard' ? 'active' : ''}`}
                onClick={() => handleItemClick('dashboard')}
              >
                <Home size={20} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/account" 
                className={`menu-item ${active === 'account' ? 'active' : ''}`}
                onClick={() => handleItemClick('account')}
              >
                <User size={20} />
                <span>My Account</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/teaching-history" 
                className={`menu-item ${active === 'teaching-history' ? 'active' : ''}`}
                onClick={() => handleItemClick('teaching-history')}
              >
                <BookOpen size={20} />
                <span>My Teaching History</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="menu-section mt-6">
          <div className="section-header">Students</div>
          <ul>
            <li>
              <Link 
                to="/messages" 
                className={`menu-item ${active === 'messages' ? 'active' : ''}`}
                onClick={() => handleItemClick('messages')}
              >
                <MessageSquare size={20} />
                <span>My Messages</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/students" 
                className={`menu-item ${active === 'students' ? 'active' : ''}`}
                onClick={() => handleItemClick('students')}
              >
                <Users size={20} />
                <span>My Students</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="menu-section mt-6">
          <div className="section-header">My Live Lessons</div>
          <ul>
            <li>
              <Link 
                to="/calendar" 
                className={`menu-item ${active === 'calendar' ? 'active' : ''}`}
                onClick={() => handleItemClick('calendar')}
              >
                <Calendar size={20} />
                <span>My Calendar</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/availability" 
                className={`menu-item ${active === 'availability' ? 'active' : ''}`}
                onClick={() => handleItemClick('availability')}
              >
                <Clock size={20} />
                <span>My Availability</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/live-lessons" 
                className={`menu-item ${active === 'live-lessons' ? 'active' : ''}`}
                onClick={() => handleItemClick('live-lessons')}
              >
                <Layout size={20} />
                <span>My Live Lessons</span>
                <PlusCircle size={16} className="ml-auto" />
              </Link>
            </li>
            <li>
              <Link 
                to="/group-lessons" 
                className={`menu-item ${active === 'group-lessons' ? 'active' : ''}`}
                onClick={() => handleItemClick('group-lessons')}
              >
                <Users size={20} />
                <span>My Group Lessons</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/lesson-reports" 
                className={`menu-item ${active === 'lesson-reports' ? 'active' : ''}`}
                onClick={() => handleItemClick('lesson-reports')}
              >
                <FileText size={20} />
                <span>My Lesson Reports</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="menu-section mt-6">
          <div className="section-header">My Content</div>
          <ul>
            <li>
              <Link 
                to="/lessons" 
                className={`menu-item ${active === 'lessons' ? 'active' : ''}`}
                onClick={() => handleItemClick('lessons')}
              >
                <BookMarked size={20} />
                <span>My Lessons</span>
                <PlusCircle size={16} className="ml-auto" />
              </Link>
            </li>
            <li>
              <Link 
                to="/courses" 
                className={`menu-item ${active === 'courses' ? 'active' : ''}`}
                onClick={() => handleItemClick('courses')}
              >
                <BookOpen size={20} />
                <span>My Courses</span>
                <PlusCircle size={16} className="ml-auto" />
              </Link>
            </li>
            <li>
              <Link 
                to="/content-library" 
                className={`menu-item ${active === 'content-library' ? 'active' : ''}`}
                onClick={() => handleItemClick('content-library')}
              >
                <BookOpen size={20} />
                <span>Content Library</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="profile-section border-t border-indigo-800 p-4 mt-auto flex items-center">
        <div className="profile-image rounded-full bg-gray-300 h-10 w-10 flex items-center justify-center text-gray-600 font-semibold">JT</div>
        <div className="ml-3">
          <div className="font-medium">Joaquin Trainer</div>
          <div className="text-xs text-indigo-300">data.trainer.fargo</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;