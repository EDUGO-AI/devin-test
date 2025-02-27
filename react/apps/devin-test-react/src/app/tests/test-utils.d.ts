import { RenderResult, Screen } from '@testing-library/react';
import { ReactElement } from 'react';

declare module '@testing-library/jest-dom';

declare module '../tests/test-utils' {
  export function render(ui: ReactElement, options?: any): RenderResult;
  export const screen: Screen;
}

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveClass(className: string): R;
      toBeVisible(): R;
    }
  }
}
