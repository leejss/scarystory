import React from 'react';

export interface ControlProps {
  className?: string;
}

const FormControl: React.FC<ControlProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default FormControl;
