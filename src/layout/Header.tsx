import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { AuthUserType } from "../redux/auth-reducer";

type HeaderProps = {
  authUser: AuthUserType;
  setAuth: (isAuth: boolean) => void;
};

class Header extends React.Component<HeaderProps> {
  render() {
    const { email, id, isAuth } = this.props.authUser;
    const setAuth = this.props.setAuth;

    return (
      <StyledHeader>
        <div>Header</div>
        <div>
          {isAuth ? (
            <Button type="link" onClick={() => setAuth(false)}>Выход</Button>
          ) : (
            <Button type="link" onClick={() => setAuth(true)}>Login</Button>
          )}
        </div>
      </StyledHeader>
    );
  }
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  
  width: 100vw;
  height: 50px;
  background-color: rgba(12, 13, 15, 0.7);
  
  font-family: 'Monserrat' sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: white;

  position: fixed;
  left: 0px;
  z-index: 3;
`;
