import styled from "styled-components";

export const Card = ({ player, currentQuestion, shadow }) => {
  return (
    <StyledCardOutside shadow={shadow}>
      <StyledCardInside>
        {player === 0 ? (
          <Logo>MIĘDZY NAMI</Logo>
        ) : (
          <Question>{currentQuestion}</Question>
        )}
      </StyledCardInside>
    </StyledCardOutside>
  );
};

const StyledCardOutside = styled.div`
  width: 320px;
  background-color: white;
  border-radius: 25px;
  height: 460px;
  box-shadow: ${(props) => props.shadow};
  margin: 24px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCardInside = styled.div`
  border-radius: 25px;
  border: 2px solid black;
  width: 296px;
  height: 436px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.p`
  left: 50px;
  text-align: center;
  font-size: 48px;
  font-family: Inria Serif;
  font-weight: 400;
  word-wrap: break-word;
`;

const Question = styled(Logo)`
  font-size: 24px;
  max-width: 80%;
`;
