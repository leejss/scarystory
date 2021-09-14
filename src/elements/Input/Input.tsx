import React from 'react';
import { StyledInput } from './Input.styles';

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<'input'>
>((props, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

Input.displayName = 'Input';

export default Input;
