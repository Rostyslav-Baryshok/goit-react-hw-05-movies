import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  transition: all 250ms ease;

  &.active {
    color: ${({ theme }) => theme.colors.accentTwo};
  }

  &:hover {
    transform: scale(1.03);
  }
`;
