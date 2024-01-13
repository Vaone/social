import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { DialogsListItem } from "../../../state/state";
import { StyledNavLink } from "../../../layout/Nav";

type dialogsListItem = {
  id: string;
  name: string;
};

type DialogsListProps = {
  dialogsUserList: dialogsListItem[];
};

const DialogsList: FC<DialogsListProps> = ({ dialogsUserList }) => {
  return (
    <StyledDialogList>
      {dialogsUserList.map((e) => (
        <StyledNavLink key={e.id} to={"/dialogs/" + e.id}>
          {e.name}
        </StyledNavLink>
      ))}
    </StyledDialogList>
  );
};

export default DialogsList;

const StyledDialogList = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding: 10px;
  border-right: 1px blue solid;
`;
