import React from 'react';
import styled from 'styled-components';
import { SizeType, spacingMap } from '../../styles/sizes';

export interface StackProps {
  gutter?: SizeType;
}

const StackWrapper = styled.div<StackProps>`
  display: grid;
  gap: ${(p) => p.gutter && spacingMap[p.gutter]};
`;

const Stack: React.FC<StackProps> = ({ children, gutter = 'large' }) => {
  return <StackWrapper gutter={gutter}>{children}</StackWrapper>;
};

export default Stack;
