import React, { useContext, createContext } from 'react';
import FornInput from './FormInput';
import FormLabel from './FormLabel';
import FormControl from './FormControl';
import { StyledForm } from './Form.styles';

// room for unique ID
export const FormContext = createContext<string | undefined>(undefined);

export interface FormPorps {
  className?: string;
}

export interface FormComposition {
  Label: typeof FormLabel;
  Input: typeof FornInput;
  Control: typeof FormControl;
}

const Form: React.FC<FormPorps> & FormComposition = ({
  children,
  className,
}) => {
  const id = useContext(FormContext);
  return (
    <FormContext.Provider value={id}>
      <StyledForm className={className}>{children}</StyledForm>
    </FormContext.Provider>
  );
};

Form.Input = FornInput;
Form.Label = FormLabel;
Form.Control = FormControl;

export default Form;
