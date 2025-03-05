import { JSX } from 'react';
import './spinner.styles.css';

export const Spinner = (): JSX.Element => (
  <div
    aria-atomic="true"
    aria-live="polite"
    aria-busy="true"
    className="spinner-container"
    role="status"
  >
    <div className="spinner" />
  </div>
);
