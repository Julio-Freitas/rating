import styled from "styled-components";



export const Button = styled.button`
  opacity: 1;
  align-self: stretch;
  height: 50px;
  max-width: 100%
  width:100%;
  font-size: 16px;
  border: 0;
  outline: none;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  letter-spacing: 0.1rem;
  color: ${({ theme }) => theme.colors.neutralWhite};
  border-radius: 32px;
  transition: all .5s;

  &:not([disabled]):hover {
    box-shadow: 1px 1px 6px 0px  ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background:${({ theme }) => theme.colors.neutralWhite};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
