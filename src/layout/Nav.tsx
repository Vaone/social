import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav: FC = ({}) => {
  return (
    <StyledNav>
      <ul>
        <li><StyledNavLink to={'/profile'}>Profile</StyledNavLink></li>
        <li><StyledNavLink to={'/dialogs'}>Dialogs</StyledNavLink></li>
        <li><StyledNavLink to={'/users'}>Users</StyledNavLink></li>
        <li><StyledNavLink to={'/music'}>Music</StyledNavLink></li>
        <li><StyledNavLink to={'/news'}>News</StyledNavLink></li>
        <li><StyledNavLink to={'/settings'}>Settings</StyledNavLink></li>
      </ul>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav`
  padding: 10px;
  background-color: #50c47789;
  width: 20vw;
  height: 100%;

  position: fixed;
  top: 3.333rem;

  width: 16.6667rem;
  box-sizing: border-box;
  color: inherit;
  overflow-y: auto;

  transform: translateZ(0px);
  transition: transform 150ms ease-out 0s;
`;

export const StyledNavLink = styled(NavLink)`
display: flex;
padding: 10px;
border-radius: 5px;
  color: #646464;
  &.active {
    color: #001aff;
    background-color: #001aff3e;
  }
`