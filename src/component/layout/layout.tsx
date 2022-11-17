import { ILayout } from "./type";
import * as Styled from "./styled";
const Layout = ({ children, backface }: ILayout) => {
  return <Styled.Layout backface={backface ?? false}>{children}</Styled.Layout>;
};

export default Layout
