import styled from "styled-components";

export const Rating = styled.div`
  background: ${({ theme }) => theme.colors.neutralDarkBlue};
  border-radius: 30px;
  max-width: 415px;
  flex: 1;
  padding: 25px 35px;
  transform: rotateY(180deg);
`;

export const Header = styled.header`
  display: flex;

  img {
    background: ${({ theme }) => theme.colors.gradientDark};
    padding: 17px;
    border-radius: 50%;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 34px;
  text-align: left;

  h1 {
    color: ${({ theme }) => theme.colors.neutralWhite};
  }
  p {
    color: ${({ theme }) => theme.colors.neutralLightGrey};
  }
`;

export const Rate = styled.label<{ selected?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 51px;
  height: 51px;
  border-radius: 50%;
  transition: all 0.5s;
  font-weight: bold;
  cursor: pointer;

  background: ${({ theme, selected }) =>
    selected ? theme.colors.neutralMediumGrey : theme.colors.gradientDark};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.neutralWhite : theme.colors.neutralLightGrey};

  :hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.neutralWhite};
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;

  div {
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin-top: 38px;
  }
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Flip = styled.div<{ flipCard: boolean }>`
  max-width: 416px;
  width: 600px;
  height: 408px;
  perspective: 1000px;
  margin: 0 auto;
  position: absolute;
  top: calc(50% - 208px);
  left: calc(50% - 204px);

  ${Inner} {
    transform: ${({ flipCard }) => flipCard && "rotateY(180deg)"};
  }
`;

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.gradientDark};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

export const Footer = styled.div`
  color: ${({ theme }) => theme.colors.neutralWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 12px;
  padding: 10px 0;

  a {
    color: ${({ theme }) => theme.colors.primary};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-decoration: none;
    transition: all 0.5s;
    :hover {
      filter: invert(0.5);
      color: ${({ theme }) => theme.colors.neutralWhite};
    }
  }

  a[href*="https://github"]
  {
    img {
      filter: invert(1);
    }
  }
`;
