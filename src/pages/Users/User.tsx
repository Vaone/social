import { Avatar, Button } from "antd";
import React from "react";
import styled from "styled-components";
import { UserType } from "../../redux/usersPage-reducer";
import { UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

type UserPageType = {
  user: UserType;
  followInProgress: number[];
  toggleFollowTC: (userId: number, userFollowed: boolean) => void;
};

class User extends React.Component<UserPageType> {
  render() {
    const { user, followInProgress, toggleFollowTC } = this.props;
    const isFollow = followInProgress.some((id) => id === user.id)
    const onClickHandler = async () => {
      toggleFollowTC(user.id, user.followed)
    };

    return (
      <StyledUserCard>
        <NavLink to={"/profile/" + user.id}>
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

        <Button
          onClick={onClickHandler}
          disabled={isFollow}
          type={user.followed ? "default" : "primary"}
        >
          {user.followed ? "Отписаться" : "Подписаться"}
        </Button>
      </StyledUserCard>
    );
  }
}

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
const StyledName = styled.h3`
  margin: 0;
  font-size: 18px;
`;
const StyledStatus = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #888;
`;
