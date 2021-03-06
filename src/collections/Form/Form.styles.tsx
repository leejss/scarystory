import styled, { css } from 'styled-components';
import { FormPorps } from './Form';
import { FormControlProps } from './FormControl';

export const StyledLabel = styled.label`
  color: #353535;
`;

export const StyledControl = styled.div<FormControlProps>`
  display: grid;
  /* Gutter support */
  gap: ${(p) => `${p.gutter}px`};
`;

export const StyledForm = styled.form<FormPorps>`
  /* Gutter support  */
`;
