import React, { useContext } from 'react';
import { FormContext } from './Form';
import { StyledLabel } from './Form.styles';

const FormLabel = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<'label'>
>((props, ref) => {
  const id = useContext(FormContext);
  return <StyledLabel ref={ref} {...props} htmlFor={id} />;
});

FormLabel.displayName = 'Form.Label';

export default FormLabel;
