import styled from "styled-components";

export const Button = ({ children, colors, onClick }) => {
  return (
    <StyledButton onClick={onClick} color={colors.color} shadow={colors.shadow}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: ${(props) => props.color};
  color: white;
  border-radius: 25px;
  width: 320px;
  height: 92px;
  font-size: 48px;
  box-shadow: ${(props) => props.shadow};
  font-family: Inria Serif;
`;
