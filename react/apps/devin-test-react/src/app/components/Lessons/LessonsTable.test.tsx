import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LessonsTable from './LessonsTable';
import '@testing-library/jest-dom';

describe('LessonsTable', () => {
  const mockLessons = [
    {
      id: '1',
      student: {
        name: 'August Smith',
        email: 'august.smith@gmail.com',
        avatar: '/avatars/august.jpg'
      },
      duration: '30 minutes',
      status: 'Confirmed by trainer',
      dateTime: {
        date: '23 Dec, 2024',
        time: 'Mon, 12:45'
      },
      languages: {
        from: 'English',
        to: 'German'
      }
    }
  ];
  
  test('renders table with correct column headers', () => {
    render(<LessonsTable lessons={mockLessons} />);
    
    expect(screen.getByText('My Student')).toBeInTheDocument();
    expect(screen.getByText('Session Duration')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Time')).toBeInTheDocument();
    expect(screen.getByText('Language')).toBeInTheDocument();
    expect(screen.getByText('Tools')).toBeInTheDocument();
  });
  
  test('renders lesson data correctly', () => {
    render(<LessonsTable lessons={mockLessons} />);
    
    expect(screen.getByText('August Smith')).toBeInTheDocument();
    expect(screen.getByText('august.smith@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('30 minutes')).toBeInTheDocument();
    expect(screen.getByText('Confirmed by trainer')).toBeInTheDocument();
    expect(screen.getByText('23 Dec, 2024')).toBeInTheDocument();
    expect(screen.getByText('Mon, 12:45')).toBeInTheDocument();
  });
  
  test('checkbox selects a row when clicked', async () => {
    const onSelectRow = jest.fn();
    render(<LessonsTable lessons={mockLessons} onSelectRow={onSelectRow} />);
    const user = userEvent.setup();
    
    const checkbox = screen.getAllByRole('checkbox')[1]; // First is header checkbox
    await user.click(checkbox);
    
    expect(onSelectRow).toHaveBeenCalledWith('1', true);
  });
  
  test('call buttons trigger correct handlers', async () => {
    const onPrepare = jest.fn();
    const onCall = jest.fn();
    const onCancel = jest.fn();
    
    render(
      <LessonsTable 
        lessons={mockLessons} 
        onPrepareCall={onPrepare}
        onStartCall={onCall}
        onCancelLesson={onCancel}
      />
    );
    
    const user = userEvent.setup();
    
    await user.click(screen.getByText('Prepare call'));
    expect(onPrepare).toHaveBeenCalledWith('1');
    
    await user.click(screen.getByTestId('call-button-1'));
    expect(onCall).toHaveBeenCalledWith('1');
    
    await user.click(screen.getByTestId('cancel-button-1'));
    expect(onCancel).toHaveBeenCalledWith('1');
  });
});
