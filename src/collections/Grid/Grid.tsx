import React from 'react';
import styled from 'styled-components';
import { SizeType, spacingMap } from '../../styles/sizes';

export interface GridProps {
  gutter?: SizeType;
}

export const Card = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid black;
`;

const Grid = styled.div<GridProps>`
  display: grid;
  gap: ${({ gutter }) => (gutter ? spacingMap[gutter] : spacingMap.large)};
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
`;

export default Grid;
