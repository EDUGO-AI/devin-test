import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SidebarNavigation from './SidebarNavigation';

describe('SidebarNavigation', () => {
  it('renders the logo container', () => {
    render(<SidebarNavigation />);
    expect(screen.getByText('Edugo.ai')).toBeInTheDocument();
  });

  it('renders all navigation sections', () => {
    render(<SidebarNavigation />);
    expect(screen.getByText('Main')).toBeInTheDocument();
    expect(screen.getByText('Teaching')).toBeInTheDocument();
    expect(screen.getByText('Account')).toBeInTheDocument();
  });

  it('renders navigation items with icons', () => {
    render(<SidebarNavigation />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Calendar')).toBeInTheDocument();
    expect(screen.getByText('Messages')).toBeInTheDocument();
    expect(screen.getByText('My Lessons')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Help')).toBeInTheDocument();
  });

  it('applies active state styling to the Dashboard item', () => {
    render(<SidebarNavigation />);
    const dashboardLink = screen.getByText('Dashboard').closest('a');
    expect(dashboardLink).toHaveClass('bg-indigo-800');
  });

  it('renders the user profile section with avatar and location', () => {
    render(<SidebarNavigation />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('New York, USA')).toBeInTheDocument();
    expect(screen.getByAltText('User avatar')).toBeInTheDocument();
  });
});
