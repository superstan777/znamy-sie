import styled from "styled-components";

export const LoadingScreen = () => {
  return (
    <StyledLoadingScreen>
      <H1>ŁADOWANIE...</H1>
    </StyledLoadingScreen>
  );
};

const StyledLoadingScreen = styled.div`
  width: 100%;
  height: 100vh;
`;

const H1 = styled.h1`
  padding-top: 20rem;
  padding-bottom: 2rem;
  font-weight: 500;
  margin: 0;
  font-size: 48px;
`;
