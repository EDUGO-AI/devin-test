
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './styles.css'; // Import Tailwind CSS

import App from './app/App'; // Fixed casing for import

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
