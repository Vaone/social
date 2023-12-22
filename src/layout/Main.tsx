import React, { FC } from "react";
import styled from "styled-components";
import Profile from "../pages/Profile/Profile";

const Main: FC = ({ children }) => {
  return (
    <StyledSection>

      {children}
    </StyledSection>
  );
};

export default Main;

const StyledSection = styled.section`
  background-color: #e7ecfc;

  margin: 0px auto;
  max-width: 100vw;
  width: 100%;
  padding: 5rem 3.33333rem 0 20rem;

  div {
    width: 100%;
    padding: 10px;
  }
`;
