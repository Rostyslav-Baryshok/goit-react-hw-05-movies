import styled from 'styled-components';

export const Form = styled.form`
  display: table;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 250px;
  padding: 12px 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin-right: 10px;
  transition: all 250ms ease;

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.accentTwo};
  }
`;
