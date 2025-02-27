import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have the dashboard component', () => {
    const { getByRole } = render(<App />);
    expect(
      getByRole('heading', { name: 'Dashboard' })
    ).toBeInTheDocument();
  });
});
