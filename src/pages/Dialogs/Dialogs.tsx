import React, { FC } from "react";
import DialogsList from "./DialogsList/DialogsList";
import styled from "styled-components";
import DialogWindow from "./DialogWindow/DialogWindow";
import { DialogsPageType } from "../../state/state";
import { Route } from "react-router-dom";

type DialogsProps = {
  state: DialogsPageType
}

const Dialogs:FC<DialogsProps> = ({state}) => {
  const dialogsUserList = state.dialogsList.map(e=>({id: e.id, name: e.name,}))
  return (
    <StyledDialogs>
      <DialogsList dialogsUserList={dialogsUserList}/>
      {state.dialogsList.map(e=><Route key={e.id} path={"/dialogs/"+e.id} render={()=><DialogWindow messagesList={e.messagesList} />}/>)}
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
  gap: 10px;
`;
