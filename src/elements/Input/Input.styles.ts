import styled, { css } from 'styled-components';
import { InputProps } from './Input';
import { PRIMARY_COLOR } from '../../styles/colors';

const errorSupport = (p: InputProps) => {
  if (p.error) {
    return css`
      background-color: #ff9c8c;
      border: 1px solid #f55a42;
      &:focus {
        border: 1px solid ${PRIMARY_COLOR};
      }
    `;
  }
};

const sizeSupport = (p: InputProps) => {
  if (p.large) {
    return css`
      font-size: 1.125rem;
      padding: 8px 12px;
    `;
  }
};

export const StyledInput = styled.input<InputProps>`
  /* Default style */
  box-sizing: border-box;
  border: 1px solid gray;
  outline: none;
  border-radius: 5px;
  width: 100%;
  font-size: 1rem;
  padding: 7px 10px;

  /* Error support */
  ${errorSupport}

  /* Size support */
  ${sizeSupport}
`;
