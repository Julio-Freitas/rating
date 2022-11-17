import { useContext } from "react";
import ThanksImg from "../../assets/images/illustration-thank-you.svg";

import * as Styled from "./styled";
import { ContextRate } from "../../context";
import { Button } from "../button";
const Thanks = () => {
  const { rate, onReset } = useContext(ContextRate);

  return (
    <Styled.Container>
      <img src={ThanksImg} alt="Thank you" title="Image congratulation" />
      <Styled.Tag>You selected  {rate?.value} out of 5</Styled.Tag>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>

      <Button text="Reset" onClick={()=> onReset()}/>
    </Styled.Container>
  );
};

export default Thanks;
