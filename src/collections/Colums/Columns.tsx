import React from 'react';
import styled from 'styled-components';
import { SizeType, spacingMap } from '../../styles/sizes';

export interface ColumnProps {
  span?: number;
}

export interface ColumnsProps {
  columns?: number;
  gutter?: SizeType;
}

export const Columns = styled.div<ColumnsProps>`
  --cols: ${({ columns = 1 }) => columns};
  display: grid;
  gap: ${(p) => (p.gutter ? spacingMap[p.gutter] : spacingMap['large'])};

  /* Set number of cols */
  grid-template-columns: repeat(var(---cols), 1fr);
`;

export const Column = styled.div<ColumnProps>`
  /* Set col's track size */
  grid-column: span min(${({ span = 1 }) => span}, var(--cols));
`;
