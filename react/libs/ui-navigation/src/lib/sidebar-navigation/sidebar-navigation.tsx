
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar-navigation.css';

export interface SidebarNavigationProps {
  activeItem?: string;
}

export function SidebarNavigation({ activeItem }: SidebarNavigationProps) {
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
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/assets/edugo-logo.svg" alt="edugo.ai" className="sidebar-logo" />
      </div>
      
      <nav className="sidebar-nav">
        {/* Main Navigation Item */}
        <div className="nav-section">
          <Link 
            to="/dashboard" 
            className={`nav-item ${isActive('dashboard') ? 'active' : ''}`}
          >
            <span className="nav-icon">
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" 
                  fill="currentColor" />
              </svg>
            </span>
            <span>Dashboard</span>
          </Link>
        </div>

        {/* Account Section */}
        <div className="nav-section">
          <Link 
            to="/account" 
            className={`nav-item ${isActive('account') ? 'active' : ''}`}
          >
            <span className="nav-icon">
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" 
                  fill="currentColor" />
              </svg>
            </span>
            <span>My Account</span>
          </Link>
        </div>

        {/* Teaching History Section */}
        <div className="nav-section">
          <Link 
            to="/teaching-history" 
            className={`nav-item ${isActive('teaching-history') ? 'active' : ''}`}
          >
            <span className="nav-icon">
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" 
                  fill="currentColor" />
              </svg>
            </span>
            <span>My Teaching History</span>
          </Link>
        </div>

        {/* Students Section */}
        <div className="nav-section">
          <div 
            className="section-header" 
            onClick={() => toggleSection('students')}
          >
            <span>STUDENTS</span>
            <span className="section-toggle">
              {openSections.students ? (
                <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                  <path d="M7 14l5-5 5 5z" fill="currentColor" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                  <path d="M7 10l5 5 5-5z" fill="currentColor" />
                </svg>
              )}
            </span>
          </div>
          
          <div className={`section-content ${openSections.students ? 'open' : 'closed'}`}>
            <Link 
              to="/messages" 
              className={`nav-item ${isActive('messages') ? 'active' : ''}`}
            >
              <span className="nav-icon">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" 
                    fill="currentColor" />
                </svg>
              </span>
              <span>My Messages</span>
            </Link>
            
            <Link 
              to="/students" 
              className={`nav-item ${isActive('students-list') ? 'active' : ''}`}
            >
              <span className="nav-icon">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" 
                    fill="currentColor" />
                </svg>
              </span>
              <span>My Students</span>
            </Link>
          </div>
        </div>

        {/* Live Lessons Section */}
        <div className="nav-section">
          <div 
            className="section-header" 
            onClick={() => toggleSection('liveLessons')}
          >
            <span>MY LIVE LESSONS</span>
            <span className="section-toggle">
              {openSections.liveLessons ? (
                <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                  <path d="M7 14l5-5 5 5z" fill="currentColor" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                  <path d="M7 10l5 5 5-5z" fill="currentColor" />
                </svg>
              )}
            </span>
          </div>
          
          <div className={`section-content ${openSections.liveLessons ? 'open' : 'closed'}`}>
            <Link 
              to="/calendar" 
              className={`nav-item ${isActive('calendar') ? 'active' : ''}`}
            >
              <span className="nav-icon">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" 
                    fill="currentColor" />
                </svg>
              </span>
              <span>My Calendar</span>
            </Link>
            
            <Link 
              to="/availability" 
              className={`nav-item ${isActive('availability') ? 'active' : ''}`}
            >
              <span className="nav-icon">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" 
                    fill="currentColor" />
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" 
                    fill="currentColor" />
                </svg>
              </span>
              <span>My Availability</span>
            </Link>
            
            <Link 
              to="/live-lessons" 
              className={`nav-item ${isActive('live-lessons') ? 'active' : ''}`}
            >
              <span className="nav-icon">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <path d="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z" 
                    fill="currentColor" />
                </svg>
              </span>
              <span>My Live Lessons</span>
            </Link>
            
            <Link 
              to="/group-lessons" 
              className={`nav-item ${isActive('group-lessons') ? 'active' : ''}`}
            >
              <span className="nav-icon">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" 
                    fill="currentColor" />
                </svg>
              </span>
              <span>My Group Lessons</span>
            </Link>
            
            <Link 
              to="/lesson-reports" 
              className={`nav-item ${isActive('lesson-reports') ? 'active' : ''}`}
            >
              <span className="nav-icon">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" 
                    fill="currentColor" />
                </svg>
              </span>
              <span>My Lesson Reports</span>
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <div className="nav-section">
          <div 
            className="section-header" 
            onClick={() => toggleSection('content')}
          >
            <span>MY CONTENT</span>
            <span className="section-toggle">
              {openSections.content ? (
                <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                  <path d="M7 14l5-5 5 5z" fill="currentColor" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                  <path d="M7 10l5 5 5-5z" fill="currentColor" />
                </svg>
              )}
            </span>
          </div>
          
          <div className={`section-content ${openSections.content ? 'open' : 'closed'}`}>
            <Link 
              to="/lessons" 
              className={`nav-item ${isActive('lessons') ? 'active' : ''}`}
            >
              <span className="nav-icon">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" 
                    fill="currentColor" />
                </svg>
              </span>
              <span>My Lessons</span>
            </Link>
            
            <Link 
              to="/courses" 
              className={`nav-item ${isActive('courses') ? 'active' : ''}`}
            >
              <span className="nav-icon">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" 
                    fill="currentColor" />
                </svg>
              </span>
              <span>My Courses</span>
            </Link>
            
            <Link 
              to="/content-library" 
              className={`nav-item ${isActive('content-library') ? 'active' : ''}`}
            >
              <span className="nav-icon">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z" 
                    fill="currentColor" />
                </svg>
              </span>
              <span>Content Library</span>
            </Link>
          </div>
        </div>
      </nav>
      
      {/* User Profile Footer */}
      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="user-avatar">
            <img src="/assets/avatar.png" alt="User" />
          </div>
          <div className="user-info">
            <div className="user-name">Joaquin Trainer</div>
            <div className="user-role">ESL Trainer · F2</div>
          </div>
        </div>
        <div className="user-location">Europe/Berlin</div>
      </div>
    </aside>
  );
}

export default SidebarNavigation;
