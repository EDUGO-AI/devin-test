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
    <div className="sidebar">
      <div className="logo-container">
        <div className="logo">edugoal</div>
      </div>

      <div className="nav-content">
        <ul className="nav-list">
          <li className={`nav-item ${active === 'dashboard' ? 'active' : ''}`}>
            <Link 
              to="/dashboard" 
              onClick={() => handleItemClick('dashboard')}
              className="nav-link"
            >
              <Home size={18} className="nav-icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={`nav-item ${active === 'account' ? 'active' : ''}`}>
            <Link 
              to="/account" 
              onClick={() => handleItemClick('account')}
              className="nav-link"
            >
              <User size={18} className="nav-icon" />
              <span>My Account</span>
            </Link>
          </li>
          <li className={`nav-item ${active === 'teaching-history' ? 'active' : ''}`}>
            <Link 
              to="/teaching-history" 
              onClick={() => handleItemClick('teaching-history')}
              className="nav-link"
            >
              <BookOpen size={18} className="nav-icon" />
              <span>My Teaching History</span>
            </Link>
          </li>
        </ul>

        <div className="section-title">STUDENTS</div>
        <ul className="nav-list">
          <li className={`nav-item ${active === 'messages' ? 'active' : ''}`}>
            <Link 
              to="/messages" 
              onClick={() => handleItemClick('messages')}
              className="nav-link"
            >
              <MessageSquare size={18} className="nav-icon" />
              <span>My Messages</span>
            </Link>
          </li>
          <li className={`nav-item ${active === 'students' ? 'active' : ''}`}>
            <Link 
              to="/students" 
              onClick={() => handleItemClick('students')}
              className="nav-link"
            >
              <Users size={18} className="nav-icon" />
              <span>My Students</span>
            </Link>
          </li>
        </ul>

        <div className="section-title">MY LIVE LESSONS</div>
        <ul className="nav-list">
          <li className={`nav-item ${active === 'calendar' ? 'active' : ''}`}>
            <Link 
              to="/calendar" 
              onClick={() => handleItemClick('calendar')}
              className="nav-link"
            >
              <Calendar size={18} className="nav-icon" />
              <span>My Calendar</span>
            </Link>
          </li>
          <li className={`nav-item ${active === 'availability' ? 'active' : ''}`}>
            <Link 
              to="/availability" 
              onClick={() => handleItemClick('availability')}
              className="nav-link"
            >
              <Clock size={18} className="nav-icon" />
              <span>My Availability</span>
            </Link>
          </li>
          <li className={`nav-item ${active === 'live-lessons' ? 'active' : ''}`}>
            <Link 
              to="/live-lessons" 
              onClick={() => handleItemClick('live-lessons')}
              className="nav-link"
            >
              <Layout size={18} className="nav-icon" />
              <span>My Live Lessons</span>
            </Link>
          </li>
          <li className={`nav-item ${active === 'group-lessons' ? 'active' : ''}`}>
            <Link 
              to="/group-lessons" 
              onClick={() => handleItemClick('group-lessons')}
              className="nav-link"
            >
              <Users size={18} className="nav-icon" />
              <span>My Group Lessons</span>
            </Link>
          </li>
          <li className={`nav-item ${active === 'lesson-reports' ? 'active' : ''}`}>
            <Link 
              to="/lesson-reports" 
              onClick={() => handleItemClick('lesson-reports')}
              className="nav-link"
            >
              <FileText size={18} className="nav-icon" />
              <span>My Lesson Reports</span>
            </Link>
          </li>
        </ul>

        <div className="section-title">MY CONTENT</div>
        <ul className="nav-list">
          <li className={`nav-item ${active === 'lessons' ? 'active' : ''}`}>
            <Link 
              to="/lessons" 
              onClick={() => handleItemClick('lessons')}
              className="nav-link"
            >
              <BookMarked size={18} className="nav-icon" />
              <span>My Lessons</span>
              <PlusCircle size={14} className="plus-icon" />
            </Link>
          </li>
          <li className={`nav-item ${active === 'courses' ? 'active' : ''}`}>
            <Link 
              to="/courses" 
              onClick={() => handleItemClick('courses')}
              className="nav-link"
            >
              <BookOpen size={18} className="nav-icon" />
              <span>My Courses</span>
              <PlusCircle size={14} className="plus-icon" />
            </Link>
          </li>
          <li className={`nav-item ${active === 'content-library' ? 'active' : ''}`}>
            <Link 
              to="/content-library" 
              onClick={() => handleItemClick('content-library')}
              className="nav-link"
            >
              <BookOpen size={18} className="nav-icon" />
              <span>Content Library</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="profile-container">
        <img src="/assets/avatar.png" alt="Joaquin Trainer" className="profile-avatar" />
        <div className="profile-info">
          <div className="profile-name">Joaquin Trainer</div>
          <div className="profile-location">Europe/Berlin</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;
