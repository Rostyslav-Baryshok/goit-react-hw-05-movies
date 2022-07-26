import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;

  &:hover {
    color: ${({ theme }) => theme.colors.accentTwo};
  }
`;

export const LinkText = styled.p`
  padding: 25px 20px 15px;
  text-align: center;
`;

export const MovieList = styled.ul`
  display: grid;
  justify-content: center;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, 300px);
  margin-bottom: 40px;
  padding-top: 30px;
`;

export const MovieItem = styled.li`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 2px 5px 0px;

  transition: transform 250ms ease;

  &:hover {
    transform: scale(1.015);
    box-shadow: 0px 2px 1px 0px;
  }
`;
