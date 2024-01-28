import { FC } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import {StyledNavLink} from '../../../layout/Nav';

type friendType = {
  friendId: string, 
  name: string,
}

type FriendListPropsTyoe = {
  friendList: friendType[]
}

const FriendList:FC<FriendListPropsTyoe> = ({friendList}) => {
  

  const onClickHandler = (id: string) => {};

  return (
    <FriendListStyled>
      {friendList.map((f) => (
        <StyledNavLink
          to={`/dialogs/${f.friendId}`}
          key={f.friendId}
          onClick={() => onClickHandler(f.friendId)}
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
