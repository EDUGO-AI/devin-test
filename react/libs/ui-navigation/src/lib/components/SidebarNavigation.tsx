import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  hasAddButton?: boolean;
}

interface NavSection {
  header?: string;
  items: NavItem[];
}

export interface SidebarNavigationProps {
  activeItem?: string;
}

export function SidebarNavigation({ activeItem = 'dashboard' }: SidebarNavigationProps) {
  // Navigation sections structure
  const navSections: NavSection[] = [
    {
      items: [
        { 
          id: 'dashboard', 
          label: 'Dashboard', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm0 8h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm0-12h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z" fill="currentColor" />
            </svg>
          )
        },
        { 
          id: 'account', 
          label: 'My Account', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor" />
            </svg>
          )
        },
        { 
          id: 'teaching-history', 
          label: 'My Teaching History', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="currentColor" />
            </svg>
          )
        },
      ]
    },
    {
      header: 'STUDENTS',
      items: [
        { 
          id: 'messages', 
          label: 'My Messages', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" fill="currentColor" />
            </svg>
          )
        },
        { 
          id: 'students', 
          label: 'My Students', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor" />
            </svg>
          )
        },
      ]
    },
    {
      header: 'MY LIVE LESSONS',
      items: [
        { 
          id: 'calendar', 
          label: 'My Calendar', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z" fill="currentColor" />
            </svg>
          )
        },
        { 
          id: 'availability', 
          label: 'My Availability', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" fill="currentColor" />
            </svg>
          )
        },
        { 
          id: 'live-lessons', 
          label: 'My Live Lessons', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" fill="currentColor" />
            </svg>
          )
        },
        { 
          id: 'group-lessons', 
          label: 'My Group Lessons', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor" />
            </svg>
          )
        },
        { 
          id: 'lesson-reports', 
          label: 'My Lesson Reports', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor" />
            </svg>
          )
        },
      ]
    },
    {
      header: 'MY CONTENT',
      items: [
        { 
          id: 'lessons', 
          label: 'My Lessons', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" fill="currentColor" />
            </svg>
          ),
          hasAddButton: true 
        },
        { 
          id: 'courses', 
          label: 'My Courses', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" fill="currentColor" />
            </svg>
          ),
          hasAddButton: true 
        },
        { 
          id: 'content-library', 
          label: 'Content Library', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z" fill="currentColor" />
            </svg>
          )
        }
      ]
    }
  ];

  // Define inline styles to ensure consistent rendering regardless of Tailwind CSS
  const styles: {
    sidebar: React.CSSProperties;
    logoSection: React.CSSProperties;
    logoImage: React.CSSProperties;
    navContainer: React.CSSProperties;
    navRoot: React.CSSProperties;
    sectionContainer: React.CSSProperties;
    sectionHeader: React.CSSProperties;
    navItem: React.CSSProperties;
    navLink: (isActive: boolean) => React.CSSProperties;
    navLinkHover: React.CSSProperties;
    iconContainer: React.CSSProperties;
    labelContainer: React.CSSProperties;
    addButton: React.CSSProperties;
    addButtonHover: React.CSSProperties;
    addButtonText: React.CSSProperties;
    profileSection: React.CSSProperties;
    profileContainer: React.CSSProperties;
    avatarContainer: React.CSSProperties;
    avatar: React.CSSProperties;
    profileInfo: React.CSSProperties;
    profileName: React.CSSProperties;
    profileActions: React.CSSProperties;
    profileButton: React.CSSProperties;
    profileButtonHover: React.CSSProperties;
    separator: React.CSSProperties;
    location: React.CSSProperties;
  } = {
    sidebar: {
      width: '200px',
      backgroundColor: '#1a1a3f', // primary color
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 50,
    },
    logoSection: {
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)', // primary-700 equivalent
    },
    logoImage: {
      height: '32px',
    },
    navContainer: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 0',
    },
    navRoot: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    sectionContainer: {
      marginBottom: '4px',
    },
    sectionHeader: {
      padding: '0 16px',
      paddingTop: '24px',
      paddingBottom: '8px',
      fontSize: '12px',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'rgba(209, 213, 219, 1)', // gray-300 equivalent
    },
    navItem: {
      padding: '0 8px',
    },
    navLink: (isActive: boolean) => ({
      display: 'flex',
      alignItems: 'center',
      padding: '8px',
      margin: '4px 0',
      borderRadius: '4px',
      fontSize: '14px',
      transition: 'background-color 0.2s',
      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
      color: isActive ? 'white' : 'rgba(229, 231, 235, 1)', // gray-200 equivalent
    }),
    navLinkHover: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    iconContainer: {
      marginRight: '12px',
    },
    labelContainer: {
      flex: 1,
    },
    addButton: {
      width: '20px',
      height: '20px',
      borderRadius: '2px',
      backgroundColor: 'rgba(75, 85, 99, 1)', // gray-600 equivalent
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    },
    addButtonHover: {
      backgroundColor: 'rgba(107, 114, 128, 1)', // gray-500 equivalent
    },
    addButtonText: {
      fontSize: '12px',
      fontWeight: 'bold',
    },
    profileSection: {
      marginTop: 'auto',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)', // primary-700 equivalent
      padding: '16px',
    },
    profileContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    avatarContainer: {
      flexShrink: 0,
      marginRight: '12px',
    },
    avatar: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
    },
    profileInfo: {
      flex: 1,
    },
    profileName: {
      fontSize: '14px',
      fontWeight: 500,
    },
    profileActions: {
      display: 'flex',
      fontSize: '12px',
      color: 'rgba(209, 213, 219, 1)', // gray-300 equivalent
      marginTop: '4px',
    },
    profileButton: {
      cursor: 'pointer',
    },
    profileButtonHover: {
      textDecoration: 'underline',
    },
    separator: {
      margin: '0 4px',
    },
    location: {
      fontSize: '12px',
      color: 'rgba(96, 165, 250, 1)', // blue-300 equivalent
      marginTop: '8px',
    },
  };

  return (
    <aside style={styles.sidebar}>
      {/* Logo section */}
      <div style={styles.logoSection}>
        <img src="/logo.svg" alt="edugo.ai" style={styles.logoImage} />
      </div>
      
      {/* Navigation sections */}
      <div style={styles.navContainer}>
        <NavigationMenu.Root style={styles.navRoot} orientation="vertical">
          {navSections.map((section, sectionIndex) => (
            <div key={sectionIndex} style={styles.sectionContainer}>
              {/* Section header if present */}
              {section.header && (
                <div style={styles.sectionHeader}>
                  {section.header}
                </div>
              )}
              
              {/* Section items */}
              {section.items.map((item) => {
                const isActive = activeItem === item.id;
                
                return (
                  <NavigationMenu.Item key={item.id} style={styles.navItem}>
                    <NavigationMenu.Link
                      style={styles.navLink(isActive)}
                      href={`/${item.id}`}
                    >
                      {/* Icon */}
                      <span style={styles.iconContainer}>{item.icon}</span>
                      
                      {/* Label */}
                      <span style={styles.labelContainer}>{item.label}</span>
                      
                      {/* Add button if needed */}
                      {item.hasAddButton && (
                        <button style={styles.addButton}>
                          <span style={styles.addButtonText}>+</span>
                        </button>
                      )}
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                );
              })}
            </div>
          ))}
        </NavigationMenu.Root>
      </div>
      
      {/* User profile section */}
      <div style={styles.profileSection}>
        <div style={styles.profileContainer}>
          <div style={styles.avatarContainer}>
            <img
              src="/avatars/joaquin.jpg"
              alt="User avatar"
              style={styles.avatar}
            />
          </div>
          <div style={styles.profileInfo}>
            <div style={styles.profileName}>Joaquin Trainer</div>
            <div style={styles.profileActions}>
              <button style={styles.profileButton}>Edit Profile</button>
              <span style={styles.separator}>|</span>
              <button style={styles.profileButton}>Log Out</button>
            </div>
          </div>
        </div>
        <div style={styles.location}>
          Europe/Berlin
        </div>
      </div>
    </aside>
  );
};

export default SidebarNavigation;
