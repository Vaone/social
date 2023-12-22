import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "./component/Container";
import CusomInput from "./component/CusomInput";
import Header from "./layout/Header";
import Nav from "./layout/Nav";
import Main from "./layout/Main";
import Profile from "./pages/Profile/Profile";
import Dialogs from "./pages/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Wrapper>
          <Header />
          <StyledMain>
            <Nav />
            <Main>
              {/* <MyPosts /> */}
              <Route path='/profile' component={Profile}/>
              <Route path='/dialogs' component={Dialogs}/>
            </Main>
          </StyledMain>
        </Wrapper>
      </div>
    </BrowserRouter>
  );
}

export default App;

const Wrapper = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: black;
`;

const StyledMain = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
`;
