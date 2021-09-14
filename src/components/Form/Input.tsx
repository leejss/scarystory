import React, { useContext } from 'react';
import { FormContext } from './Form';
import { StyledInput } from './Form.styles';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const id = useContext(FormContext);
  return <StyledInput ref={ref} {...props} id={id} />;
});

Input.displayName = 'Form.Input';

export default Input;
