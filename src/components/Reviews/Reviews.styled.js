import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  grid-gap: 15px;

  li {
    padding: 15px 20px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0px 0px 5px 0px;
  }

  h2 {
    text-align: center;
    margin-bottom: 15px;
    font-size: 18px;
  }

  p {
    text-align: start;
    margin-bottom: 7px;
  }
`;
