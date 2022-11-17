import * as Styled from "./styled";
import { IButton } from "./types";

const Button = ({text, ...attr}:IButton) => {
  return <Styled.Button type="button" {...attr}>{text}</Styled.Button>;
};

export default Button;
