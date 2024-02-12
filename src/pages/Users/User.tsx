import { Avatar } from "antd";
import { FC } from "react";
import styled from "styled-components";
import { UserType } from "../../redux/usersPage-reducer";
import { UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

type UserPageType = {
  user: UserType;
  followHandler: (userId: number) => void;
};

const User: FC<UserPageType> = ({ user, followHandler }) => {
  const onClickHandler = () => {
    followHandler(user.id);
  };

  return (
    <StyledUserCard>
      <NavLink to={'/profile/'+user.id}>
        {user.photos.small ? (
          <Avatar size={100} src={user.photos.small} />
        ) : (
          <Avatar size={100} icon={<UserOutlined />} />
        )}
      </NavLink>
      <StyledUserInfo>
        <StyledName>{user.name}</StyledName>
        <StyledStatus>{user.status}</StyledStatus>
      </StyledUserInfo>
      <StyledBtn onClick={onClickHandler}>
        {user.followed ? "Подписаться" : "Отписаться"}
      </StyledBtn>
    </StyledUserCard>
  );
};

export default User;

const StyledUserCard = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px;
  width: 250px;
  text-align: center;
`;
const StyledUserInfo = styled.div`
  padding: 15px;
`;
const StyledBtn = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 0 0 8px 8px;
  font-size: 16px;
  &:hover {
    background-color: #217dbb;
  }
`;
const StyledName = styled.h3`
  margin: 0;
  font-size: 18px;
`;
const StyledStatus = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #888;
`;
