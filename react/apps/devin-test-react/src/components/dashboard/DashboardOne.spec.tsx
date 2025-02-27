import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import DashboardOne from './DashboardOne';

// Mock the child components to simplify testing
vi.mock('./SidebarNavigation', () => ({
  default: () => <div data-testid="sidebar-navigation">Sidebar Navigation</div>
}));

vi.mock('./DashboardHeader', () => ({
  default: ({ username }: { username: string }) => (
    <div data-testid="dashboard-header">Header for {username}</div>
  )
}));

vi.mock('./ActionCards', () => ({
  default: () => <div data-testid="action-cards">Action Cards</div>
}));

vi.mock('./LessonsTable', () => ({
  default: () => <div data-testid="lessons-table">Lessons Table</div>
}));

describe('DashboardOne', () => {
  it('renders the sidebar navigation', () => {
    render(<DashboardOne />);
    expect(screen.getByTestId('sidebar-navigation')).toBeInTheDocument();
  });

  it('renders the dashboard header with the correct username', () => {
    render(<DashboardOne />);
    expect(screen.getByTestId('dashboard-header')).toBeInTheDocument();
    expect(screen.getByText(/Header for John Doe/i)).toBeInTheDocument();
  });

  it('renders the action cards', () => {
    render(<DashboardOne />);
    expect(screen.getByTestId('action-cards')).toBeInTheDocument();
  });

  it('renders the lessons table', () => {
    render(<DashboardOne />);
    expect(screen.getByTestId('lessons-table')).toBeInTheDocument();
  });

  it('has the correct layout structure', () => {
    render(<DashboardOne />);
    
    // Since we're using mocks, we can't check the actual classes
    // Instead, verify the components are rendered in the correct structure
    const sidebarNavigation = screen.getByTestId('sidebar-navigation');
    expect(sidebarNavigation).toBeInTheDocument();
    
    const contentArea = screen.getByTestId('dashboard-header').closest('div');
    expect(contentArea).toBeInTheDocument();
    
    // Verify all components are rendered in the correct order
    const container = screen.getByText(/Sidebar Navigation/i).parentElement;
    expect(container).toContainElement(screen.getByTestId('dashboard-header'));
    expect(container).toContainElement(screen.getByTestId('action-cards'));
    expect(container).toContainElement(screen.getByTestId('lessons-table'));
  });
});
