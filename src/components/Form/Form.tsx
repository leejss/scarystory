import React, { useContext, createContext } from 'react';
import Input from './Input';
import Label from './Label';
import Control from './Control';

// room for unique ID
export const FormContext = createContext<string | undefined>(undefined);

export interface FormPorps {
  className?: string;
}

export interface FormComposition {
  Label: typeof Label;
  Input: typeof Input;
  Control: typeof Control;
}

const Form: React.FC<FormPorps> & FormComposition = ({
  children,
  className,
}) => {
  const id = useContext(FormContext);
  return (
    <FormContext.Provider value={id}>
      <form className={className}>{children}</form>
    </FormContext.Provider>
  );
};

Form.Input = Input;
Form.Label = Label;
Form.Control = Control;

export default Form;
