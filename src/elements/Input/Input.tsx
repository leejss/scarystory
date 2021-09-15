import React from 'react';
import { StyledInput } from './Input.styles';

export type InputSize = 'small' | 'meduium' | 'large';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  loading?: boolean;
  error?: boolean;
  large?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ loading, error, large, ...props }, ref) => {
    return (
      <StyledInput
        large={large}
        loading={loading}
        error={error}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
