import React from 'react';
import { StyledButton } from './Button.styles';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  varitant?: ButtonVariant;
  round?: boolean;
  fullWidth?: boolean;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      varitant = 'primary',
      round = false,
      fullWidth = false,
      size = 'medium',
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton
        type="button"
        ref={ref}
        varitant={varitant}
        round={round}
        fullWidth={fullWidth}
        size={size}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
