import styled from "styled-components";

export const Layout = styled.div<{backface: boolean}>`
  background: ${({ theme }) => theme.colors.neutralDarkBlue};
  border-radius: 30px;
  max-width: 415px;
  flex: 1;
  padding: 25px 35px;
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  ${({backface})=> backface && `transform: rotateY(180deg);`}

`;
