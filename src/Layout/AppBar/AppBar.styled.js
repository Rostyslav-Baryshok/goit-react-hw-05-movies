import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
`;
