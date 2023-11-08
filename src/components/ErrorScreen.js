import styled from "styled-components";
import { Button } from "./Button";

export const ErrorScreen = ({ colors }) => {
  return (
    <StyledErrorScreen>
      <H1>COŚ POSZŁO NIE TAK...</H1>
      <Button colors={colors} onClick={() => window.location.reload()}>
        ODŚWIEŻ
      </Button>
    </StyledErrorScreen>
  );
};

const StyledErrorScreen = styled.div`
  width: 100%;
  height: 100vh;
`;

const H1 = styled.h1`
  padding-top: 12rem;
  padding-bottom: 2rem;
  font-weight: 500;
  margin: 0;
  font-size: 48px;
`;
