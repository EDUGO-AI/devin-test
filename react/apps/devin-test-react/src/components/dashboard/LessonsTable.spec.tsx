import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import LessonsTable from './LessonsTable';

describe('LessonsTable', () => {
  it('renders the table header with correct title and lesson count', () => {
    render(<LessonsTable />);
    expect(screen.getByText('My upcoming lessons')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument(); // Based on mock data count
  });

  it('renders the search input field', () => {
    render(<LessonsTable />);
    expect(screen.getByPlaceholderText('Search lessons...')).toBeInTheDocument();
  });

  it('renders table with correct column headers', () => {
    render(<LessonsTable />);
    expect(screen.getByText('Student')).toBeInTheDocument();
    expect(screen.getByText('Duration')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Time')).toBeInTheDocument();
    expect(screen.getByText('Language')).toBeInTheDocument();
    expect(screen.getByText('Tools')).toBeInTheDocument();
  });

  it('renders student information with avatar, name, and email', () => {
    render(<LessonsTable />);
    expect(screen.getByText('Emma Johnson')).toBeInTheDocument();
    expect(screen.getByText('emma.j@example.com')).toBeInTheDocument();
    const avatarContainer = screen.getByText('Emma Johnson').closest('td');
    expect(avatarContainer).toBeInTheDocument();
  });

  it('renders status indicators with correct styling', () => {
    render(<LessonsTable />);
    const confirmedStatus = screen.getAllByText('Confirmed by trainer')[0];
    const pendingStatus = screen.getByText('Pending confirmation');
    
    expect(confirmedStatus).toHaveClass('bg-green-100');
    expect(confirmedStatus).toHaveClass('text-success');
    expect(pendingStatus).toHaveClass('bg-yellow-100');
    expect(pendingStatus).toHaveClass('text-yellow-800');
  });

  it('renders language pairs with flags', () => {
    render(<LessonsTable />);
    expect(screen.getAllByText('English')).not.toHaveLength(0);
    expect(screen.getAllByText('Spanish')).not.toHaveLength(0);
    expect(screen.getAllByText('French')).not.toHaveLength(0);
    expect(screen.getAllByText('German')).not.toHaveLength(0);
    
    // Check for language pairs with flags
    const languageCells = screen.getAllByText(/English|Spanish|French|German/);
    expect(languageCells.length).toBeGreaterThan(0);
  });

  it('filters lessons based on search term', () => {
    render(<LessonsTable />);
    const searchInput = screen.getByPlaceholderText('Search lessons...');
    
    // Search for Emma
    fireEvent.change(searchInput, { target: { value: 'Emma' } });
    expect(screen.getByText('Emma Johnson')).toBeInTheDocument();
    expect(screen.queryByText('Michael Chen')).not.toBeInTheDocument();
    
    // Search for Michael
    fireEvent.change(searchInput, { target: { value: 'Michael' } });
    expect(screen.queryByText('Emma Johnson')).not.toBeInTheDocument();
    expect(screen.getByText('Michael Chen')).toBeInTheDocument();
    
    // Clear search
    fireEvent.change(searchInput, { target: { value: '' } });
    expect(screen.getByText('Emma Johnson')).toBeInTheDocument();
    expect(screen.getByText('Michael Chen')).toBeInTheDocument();
  });

  it('handles checkbox selection', () => {
    render(<LessonsTable />);
    const checkboxes = screen.getAllByRole('checkbox');
    
    // Select first lesson
    fireEvent.click(checkboxes[1]); // First row checkbox (index 0 is header)
    
    // Verify console log (would need to mock and test state in a real app)
    // This is a simplified test since we're not exposing the state
    expect(checkboxes[1]).toHaveAttribute('data-state', 'checked');
  });

  it('fires correct handlers when action buttons are clicked', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    render(<LessonsTable />);
    
    // Find and click the prepare call button
    const prepareButtons = screen.getAllByLabelText('Prepare call icon');
    fireEvent.click(prepareButtons[0]);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Prepare call for lesson'));
    
    // Find and click the start call button
    const startButtons = screen.getAllByLabelText('Start call icon');
    fireEvent.click(startButtons[0]);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Start call for lesson'));
    
    consoleSpy.mockRestore();
  });
});
