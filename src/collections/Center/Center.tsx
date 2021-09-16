import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  min-block-size: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Center: React.FC = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Center;
