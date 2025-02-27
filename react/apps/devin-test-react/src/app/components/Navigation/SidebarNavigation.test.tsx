import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SidebarNavigation from './SidebarNavigation';
import '@testing-library/jest-dom';

describe('SidebarNavigation', () => {
  test('renders all navigation sections', () => {
    render(<SidebarNavigation />);
    
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('STUDENTS')).toBeInTheDocument();
    expect(screen.getByText('MY LIVE LESSONS')).toBeInTheDocument();
    expect(screen.getByText('MY CONTENT')).toBeInTheDocument();
  });
  
  test('highlights active navigation item', () => {
    render(<SidebarNavigation activeItem="dashboard" />);
    
    const dashboardLink = screen.getByText('Dashboard').closest('a');
    expect(dashboardLink).toHaveClass('bg-secondary bg-opacity-10 text-secondary');
  });
  
  test('section headers toggle their sections when clicked', async () => {
    render(<SidebarNavigation />);
    const user = userEvent.setup();
    
    // Initially all sections are open
    expect(screen.getByText('My Messages')).toBeVisible();
    
    // Click the STUDENTS header to close that section
    const studentsHeader = screen.getByText('STUDENTS');
    await user.click(studentsHeader);
    
    // Check if items are now hidden
    const messagesLink = screen.queryByText('My Messages');
    expect(messagesLink).not.toBeVisible();
    
    // Click again to reopen
    await user.click(studentsHeader);
    expect(screen.getByText('My Messages')).toBeVisible();
  });
});
