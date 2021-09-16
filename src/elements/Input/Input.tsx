import React from 'react';
import { StyledInput } from './Input.styles';

export type InputSize = 'small' | 'meduium' | 'large';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  error?: boolean;
  large?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, large, ...props }, ref) => {
    return <StyledInput error={error} large={large} ref={ref} {...props} />;
  }
);

Input.displayName = 'Input';

export default Input;
