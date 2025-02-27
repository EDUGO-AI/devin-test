import React from 'react';
import { render, screen } from '../../tests/test-utils';
import userEvent from '@testing-library/user-event';
import ActionCard from './ActionCard';
import '@testing-library/jest-dom';

describe('ActionCard', () => {
  const mockProps = {
    title: 'Create Lesson',
    icon: <span>+</span>,
    illustration: '/assets/create-lesson.svg',
    onClick: jest.fn()
  };
  
  test('renders with correct title and illustration', () => {
    render(<ActionCard {...mockProps} />);
    
    expect(screen.getByText('Create Lesson')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', '/assets/create-lesson.svg');
  });
  
  test('calls onClick handler when clicked', async () => {
    render(<ActionCard {...mockProps} />);
    const user = userEvent.setup();
    
    await user.click(screen.getByText('Create Lesson'));
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});
