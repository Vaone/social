import { FC } from "react";
import styled from "styled-components";
import Nav from "./layout/Nav";
import Main from "./layout/Main";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./pages/Dialogs/DialogsContainer";
import UsersContainer from "./pages/Users/UsersContainer";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import HeadersContainer from "./layout/HeaderContainer";
import Login from "./pages/Login/Login";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Wrapper>
          <HeadersContainer />
          <StyledMain>
            <Nav />
            <Main>
              <Route
                path="/profile/:userId?"
                render={() =><ProfileContainer />}
              />
              <Route
                path="/dialogs"
                render={()=><DialogsContainer />}  
              />
              <Route
                path="/users"
                render={()=><UsersContainer />}  
              />
              <Route
                path="/login"
                render={()=><Login />}  
              />
            </Main>
          </StyledMain>
        </Wrapper>
      </div>
    </BrowserRouter>
  );
};

export default App;

const Wrapper = styled.div`
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
