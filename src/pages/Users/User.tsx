import React, { FC } from 'react';
import styled from 'styled-components';
import { UserType } from '../../redux/usersPage-reducer';
import photo from '../../img/avatar.jpg'

type UserPageType = {
  user: UserType,
  followHandler: (userId: string)=>void
}

const User:FC<UserPageType> = ({user, followHandler}) => {
  
  const onClickHandler = () => {
    followHandler(user.userId)
  }

  return (
    <StyledUserCard>
        <StyledAvatar src={user.avatarPhoto ? user.avatarPhoto : photo} alt="User Avatar" />
        <StyledUserInfo>
          <StyledName>{user.userName}</StyledName>
          <StyledStatus>{user.location.country}, {user.location.city}</StyledStatus>
          <StyledStatus>{user.statusMessage}</StyledStatus>
        </StyledUserInfo>
        <StyledBtn onClick={onClickHandler}>{user.followed ? 'Подписаться' : 'Отписаться'}</StyledBtn>
      </StyledUserCard>
  )
};

export default User;


const StyledUserCard = styled.div` 
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin: 20px;
  width: 250px;
  text-align: center;
`
const StyledAvatar = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`
const StyledUserInfo = styled.div`
  padding: 15px;
`
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
`
const StyledName = styled.h3`
  margin: 0;
  font-size: 18px;
`
const StyledStatus = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #888;
`