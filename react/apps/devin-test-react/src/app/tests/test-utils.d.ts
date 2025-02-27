import { RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';

declare module '../../tests/test-utils' {
  export function render(ui: ReactElement, options?: any): RenderResult;
  export const screen: any;
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
