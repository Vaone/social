import React, { FC } from "react";
import styled from "styled-components";
import { v1 } from "uuid";
import User from "./User";
import { UsersPropsType } from "./UsersContainer";
import s from "../../img/samurai.jpg";

const Users: FC<UsersPropsType> = ({ users, setUsers, followHandler }) => {
  if (users.length === 0) {
    setUsers([
      {
        userId: v1(),
        avatarPhoto: s,
        userName: "Vladimir",
        location: { city: "Los-Angeles", country: "USA" },
        statusMessage: "Hello world",
        followed: false,
      },
      {
        userId: v1(),
        avatarPhoto: s,
        userName: "Nastya",
        location: { city: "Los-Angeles", country: "USA" },
        statusMessage: "ASdknlkad",
        followed: true,
      },
      {
        userId: v1(),
        avatarPhoto: undefined,
        userName: "Nikita",
        location: { city: "Moscow", country: "Russia" },
        statusMessage: "G psdasdasp;dl; asdasd",
        followed: false,
      },
    ]);
  }

  return (
    <StyledUserList>
      {users.map((u) => (
        <User key={u.userId} user={u} followHandler={followHandler} />
      ))}
    </StyledUserList>
  );
};

export default Users;

const StyledUserList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
