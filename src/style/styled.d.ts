import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      neutralWhite: string;
      neutralLightGrey: string;
      neutralMediumGrey: string;
      neutralDarkBlue: string;
      neutralVeryDark: string;
      gradientDark: string;
    };
  }
}
