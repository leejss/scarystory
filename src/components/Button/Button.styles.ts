import styled, { css } from 'styled-components';
import type { ButtonProps } from './Button';
import { transparentize } from 'polished';
import * as styles from '../../styles/colors';
import { fontSizeMap, paddingSizeMap } from '../../styles/sizes';

const buttonSize = (p: ButtonProps) => {
  let fontSize;
  let padding;
  switch (p.size) {
    case 'large':
      fontSize = fontSizeMap['large'];
      padding = paddingSizeMap['large'];
      break;
    case 'medium':
      fontSize = fontSizeMap['medium'];
      padding = paddingSizeMap['medium'];
      break;
    case 'small':
      fontSize = fontSizeMap['small'];
      padding = paddingSizeMap['small'];
      break;
    default:
      return;
  }

  return css`
    font-size: ${fontSize};
    padding: ${padding};
  `;
};

const colorStyle = (p: ButtonProps) => {
  let bgColor;
  switch (p.varitant) {
    case 'primary':
      bgColor = styles.PRIMARY_COLOR;
      break;
    case 'secondary':
      bgColor = styles.SECONDARY_COLOR;
      break;
    case 'danger':
      bgColor = styles.DANGER_COLOR;
      break;
    default:
      // What happen?
      bgColor = '#000';
  }

  return css`
    background-color: ${bgColor};
    &:hover {
      background-color: ${transparentize(styles.HOVER_OPACITY, bgColor)};
    }
  `;
};

export const StyledButton = styled.button<ButtonProps>`
  /* Defualt Style */
  color: #fff;
  text-align: center;
  font-weight: 400;
  border: 1px solid transparent;
  line-height: 1.5;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  &:disabled {
    cursor: inherit;
    opacity: ${styles.DISABLED_OPACITY};
  }

  /* Size support */
  ${buttonSize}

  /* width support */
  width: ${(p) => p.fullWidth && '100%'};

  /* variant support */
  ${colorStyle}

  /* Round support */
  border-radius :${(p) => (p.round ? '40px' : '5px')}
`;
