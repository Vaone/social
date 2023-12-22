import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { StyledNavLink } from '../../../layout/Nav';

const DialogsList = ({}) => {
  return (
    <StyledDialogList>
      <StyledNavLink to='/dialogs/kolya' >Коля</StyledNavLink>
      <StyledNavLink to='/dialogs/petya' >Петя</StyledNavLink>
      <StyledNavLink to='/dialogs/vasya' >Вася</StyledNavLink>
      <StyledNavLink to='/dialogs/vanya' >Ваня</StyledNavLink>
    </StyledDialogList>
  )
};

export default DialogsList;

const StyledDialogList = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  min-width: 300px;
`