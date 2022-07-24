import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const MovieTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.text};
`;

export const MovieImage = styled.img`
  width: 250px;
  object-fit: cover;
`;

export const Box = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 15px;
`;

export const Title = styled.h3`
  font-weight: 500;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Text = styled.p`
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Container = styled.div`
  height: auto;
  padding: 40px 60px;
`;

export const ContainerLink = styled.div`
  display: flex;
  align-items: baseline;
  padding: 40px 0;

  h2 {
    margin-right: 20px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Overview = styled.h3`
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Button = styled.button`
  margin-bottom: 20px;
  padding: 12px 20px;
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  transition: all 250ms ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    color: ${({ theme }) => theme.colors.accentTwo};
  }
`;
