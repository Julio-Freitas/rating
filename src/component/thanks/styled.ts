import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;


  h2 {
    color: ${({ theme }) => theme.colors.neutralWhite};
    font-size: 34px;
    margin: 5px 0 10px 0;
  }

  p{
    color: ${({ theme }) => theme.colors.neutralLightGrey};
    font-size: 16px;
    text-align: center;
    opacity: .75;
  }
`;

export const Tag = styled.span`
  padding: 8px 15px;
  background-image: ${({ theme }) => theme.colors.gradientDark};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  border-radius: 13px;
`;

