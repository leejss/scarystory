import React, { useContext } from 'react';
import { FormContext } from './Form';
import { StyledInput } from './Form.styles';

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<'input'>
>(({ className, ...props }, ref) => {
  const id = useContext(FormContext);
  return <StyledInput className={className} ref={ref} {...props} id={id} />;
});

Input.displayName = 'Form.Input';

export default Input;
