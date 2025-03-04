import { JSX } from 'react';
import './spinner.styles.css';

/**
 * Spinner component.
 *
 * Represents a loading spinner.
 *
 * @ui_component
 * @example
 * // Usage example
 * <Spinner />
 *
 * @returns {JSX.Element} The rendered Spinner component.
 */
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
