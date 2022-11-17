import * as Styled from "./styled";
import IconStar from "../../assets/images/icon-star.svg";
import IconGit from "../../assets/images/icon-github.svg";
import { RadioList } from "./types";
import { useRate } from "../../context/rating/useRate";
import Thanks from "../thanks/thanks";
import { Layout } from "../layout";
import { Button } from "../button";

const rates: RadioList = {
  radios: [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ],
};
const Rating = () => {
  const { rate: selectedRadio, onSetRate, finished, onSetFinised } = useRate();

  return (
    <Styled.Container>
      <Styled.Flip flipCard={finished}>
        <Styled.Inner>
          <Layout>
            <Styled.Header>
              <img src={IconStar} alt="icon start" title="icon start" />
            </Styled.Header>
            <Styled.Content>
              <h1>How did we go</h1>
              <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </Styled.Content>
            <Styled.Form>
              <div>
                {rates.radios.map((rate) => (
                  <Styled.Rate
                    htmlFor={`rate-${rate.id}`}
                    selected={selectedRadio?.id === rate.id}
                  >
                    {rate.value}
                    <input
                      type="radio"
                      name="rating"
                      id={`rate-${rate.id}`}
                      hidden
                      onChange={() => onSetRate(rate)}
                    />
                  </Styled.Rate>
                ))}
              </div>

              <Button
                type="button"
                text="Submit"
                disabled={!selectedRadio?.id}
                onClick={() => onSetFinised(true)}
              />
            </Styled.Form>
          </Layout>
          <Layout backface>
            <Thanks />
          </Layout>
        </Styled.Inner>
      </Styled.Flip>
      <Styled.Footer>
        <a href="https://github.com/Julio-Freitas" target="_blank">

          <img src={IconGit} /> Julio Freitas
        </a>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>

      </Styled.Footer>
    </Styled.Container>
  );
};

export default Rating;
