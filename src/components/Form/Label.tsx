import React, { useContext } from 'react';
import { FormContext } from './Form';
import { StyledLabel } from './Form.styles';

const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<'label'>
>((props, ref) => {
  const id = useContext(FormContext);
  return <StyledLabel ref={ref} {...props} htmlFor={id} />;
});

Label.displayName = 'Form.Label';

export default Label;
