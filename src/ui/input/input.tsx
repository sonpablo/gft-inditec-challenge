import { forwardRef, ReactNode } from 'react';
import './input.styles.css';

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  prefix?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ prefix, ...props }, ref) => {
    return (
      <div className="input-container">
        {prefix && prefix}
        <input ref={ref} className="Input" type="text" {...props} />
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
