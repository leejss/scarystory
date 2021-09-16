export type SizeType = 'small' | 'medium' | 'large';

export const paddingSizeMap: Record<SizeType, string> = {
  small: '0.25rem 0.5rem',
  medium: '0.4rem 0.75rem',
  large: '0.5rem 1rem',
};

export const fontSizeMap: Record<SizeType, string> = {
  small: '0.825rem',
  medium: '1rem',
  large: '1.25rem',
};

export const spacingMap: Record<SizeType, string> = {
  small: '0.25rem',
  medium: '0.5rem',
  large: '1rem',
};
