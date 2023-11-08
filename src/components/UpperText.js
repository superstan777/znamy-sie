import styled from "styled-components";

export const UpperText = ({ children }) => {
  return <P>{children}</P>;
};

const P = styled.p`
  font-size: 28px;
  font-family: Inria Serif;
  font-weight: 400;
  word-wrap: break-word;
  line-height: 29px;
  margin-top: 12px;
`;
