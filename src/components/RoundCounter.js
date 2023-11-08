import styled from "styled-components";

export const RoundCounter = ({ counter }) => {
  return <Counter>{counter === 0 ? "" : `PYTANIE ${counter}`}</Counter>;
};

const Counter = styled.div`
  margin: 0 auto;
  margin-top: 64px;
  height: 24px;
`;
