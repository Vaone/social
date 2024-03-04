import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { HeadersPropsType } from "./HeaderContainer";

class Header extends React.Component<HeadersPropsType> {
  render() {
    const { isAuth } = this.props.user;

    return (
      <StyledHeader>
        <div>Header</div>
        <div>
          {isAuth ? (
            <Button type="link" onClick={() => this.props.setAuth(false)}>Выход</Button>
          ) : (
            <Button type="link" onClick={() => this.props.setAuth(true)}>Login</Button>
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
