import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  justify-content: center;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, 160px);
  margin-bottom: 40px;

  li {
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  img {
    object-fit: cover;
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  p {
    text-align: center;
    margin-bottom: 7px;
  }
`;
