import React from "react";
import DialogsList from "./DialogsList/DialogsList";
import styled from "styled-components";
import DialogWindow from "./DialogWindow/DialogWindow";

const Dialogs = () => {
  return (
    <StyledDialogs>
      <DialogsList />
      <DialogWindow />
    </StyledDialogs>
  );
};

export default Dialogs;

const StyledDialogs = styled.div`
  max-width: 1140px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  margin: 0 auto;
`;
