import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import ActionCards from './ActionCards';

describe('ActionCards', () => {
  it('renders both action cards with correct titles', () => {
    render(<ActionCards />);
    expect(screen.getByText('Create Lesson')).toBeInTheDocument();
    expect(screen.getByText('Start Videocall')).toBeInTheDocument();
  });

  it('renders descriptions for both cards', () => {
    render(<ActionCards />);
    expect(screen.getByText('Schedule a new lesson with a student')).toBeInTheDocument();
    expect(screen.getByText('Begin a video session immediately')).toBeInTheDocument();
  });

  it('renders icons for both cards', () => {
    render(<ActionCards />);
    const createIcon = screen.getAllByLabelText('Create lesson icon');
    const videocallIcon = screen.getAllByLabelText('Start videocall icon');
    expect(createIcon.length).toBe(1);
    expect(videocallIcon.length).toBe(1);
  });

  it('fires the correct handler when Create Lesson card is clicked', () => {
    // Mock console.log to verify it's called with the right message
    const consoleSpy = vi.spyOn(console, 'log');
    render(<ActionCards />);
    
    fireEvent.click(screen.getByText('Create Lesson'));
    expect(consoleSpy).toHaveBeenCalledWith('Create lesson clicked');
    
    consoleSpy.mockRestore();
  });

  it('fires the correct handler when Start Videocall card is clicked', () => {
    // Mock console.log to verify it's called with the right message
    const consoleSpy = vi.spyOn(console, 'log');
    render(<ActionCards />);
    
    fireEvent.click(screen.getByText('Start Videocall'));
    expect(consoleSpy).toHaveBeenCalledWith('Start videocall clicked');
    
    consoleSpy.mockRestore();
  });

  it('applies hover styles to cards', () => {
    render(<ActionCards />);
    const cards = screen.getAllByRole('generic').filter(
      element => element.className.includes('cursor-pointer')
    );
    
    expect(cards.length).toBe(2);
    cards.forEach(card => {
      expect(card).toHaveClass('hover:shadow-md');
      expect(card).toHaveClass('hover:translate-y-[-2px]');
    });
  });
});
