import { FC } from "react";
import styled from "styled-components";
import {StyledNavLink} from '../../../layout/Nav';
import { FriendType } from "../../../redux/dialogPage-reducer";

type FriendListPropsType = {
  friendList: FriendType[]
}

const FriendList:FC<FriendListPropsType> = ({friendList}) => {
  return (
    <FriendListStyled>
      {friendList.map((f) => (
        <StyledNavLink
          to={`/dialogs/${f.friendId}`}
          key={f.friendId}
        >
          {f.name}
        </StyledNavLink>
      ))}
    </FriendListStyled>
  );
};

export default FriendList;

const FriendListStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  border-right: 2px solid black;
  padding-right: 20px;
`;
