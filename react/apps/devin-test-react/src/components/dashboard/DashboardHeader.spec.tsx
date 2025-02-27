import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashboardHeader from './DashboardHeader';

describe('DashboardHeader', () => {
  it('renders the dashboard heading', () => {
    render(<DashboardHeader username="Test User" />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('renders the welcome message with the provided username', () => {
    render(<DashboardHeader username="Test User" />);
    expect(screen.getByText(/Welcome back/i)).toBeInTheDocument();
    expect(screen.getByText('Test User')).toBeInTheDocument();
  });

  it('displays a different username when provided', () => {
    render(<DashboardHeader username="Jane Doe" />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });
});
