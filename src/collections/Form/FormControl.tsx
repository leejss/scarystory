import React from 'react';
import { StyledControl } from './Form.styles';

export interface FormControlProps {
  className?: string;
  gutter?: number;
}

const FormControl: React.FC<FormControlProps> = ({
  children,
  className,
  gutter = 5,
}) => {
  return (
    <StyledControl gutter={gutter} className={className}>
      {children}
    </StyledControl>
  );
};

export default FormControl;
