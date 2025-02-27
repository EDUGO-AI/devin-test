import React from 'react';
import { render, screen } from '../../tests/test-utils';
import userEvent from '@testing-library/user-event';
import DashboardTwo from './DashboardTwo';
import '@testing-library/jest-dom';

// Mock the console.log to avoid polluting test output
jest.spyOn(console, 'log').mockImplementation(() => {});

describe('DashboardTwo Integration', () => {
  test('creates a new lesson when clicking Create Lesson card', async () => {
    render(<DashboardTwo />);
    const user = userEvent.setup();
    
    // Click the Create Lesson card
    await user.click(screen.getByText('Create Lesson'));
    
    // Check if the dialog opens
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('New Lesson')).toBeInTheDocument();
    
    // Fill out the form
    await user.selectOptions(screen.getByLabelText('Student'), '1');
    await user.type(screen.getByLabelText('Date & Time'), '2025-12-23T12:45');
    await user.selectOptions(screen.getByLabelText('Duration'), '30');
    
    // Submit the form
    await user.click(screen.getByRole('button', { name: 'Create Lesson' }));
    
    // Dialog should be closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
  
  test('starts a video call when clicking Start Videocall card', async () => {
    render(<DashboardTwo />);
    const user = userEvent.setup();
    
    await user.click(screen.getByText('Start Videocall'));
    
    // Since we mocked console.log, we can check if it was called
    expect(console.log).toHaveBeenCalledWith('Start videocall clicked');
  });
});
