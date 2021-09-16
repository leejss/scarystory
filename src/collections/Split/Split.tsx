import React from 'react';
import styled from 'styled-components';
import { SizeType, spacingMap } from '../../styles/sizes';

type Fraction =
  | '1/4'
  | '1/3'
  | '1/2'
  | '2/3'
  | '3/4'
  | 'auto-start'
  | 'auto-end';

const fractions: Record<Fraction, string> = {
  '1/4': '1fr 3fr',
  '1/3': '1fr 2fr',
  '1/2': '1fr 1fr',
  '2/3': '2fr 1fr',
  '3/4': '3fr 1fr',
  'auto-start': 'auto 1fr',
  'auto-end': '1fr auto',
};

export interface SplitProps {
  gutter?: SizeType;
  fraction?: Fraction;
}

const StyledDiv = styled.div<SplitProps>`
  display: grid;
  gap: ${(p) => p.gutter && spacingMap[p.gutter]};
  grid-template-columns: ${(p) =>
    p.fraction ? fractions[p.fraction] : fractions['1/2']};
`;

const Split: React.FC<SplitProps> = ({ children, fraction, gutter }) => {
  return (
    <StyledDiv gutter={gutter} fraction={fraction}>
      {children}
    </StyledDiv>
  );
};

export default Split;
