import { FC } from "react";
import styled from "styled-components";
import Header from "./layout/Header";
import Nav from "./layout/Nav";
import Main from "./layout/Main";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./pages/Dialogs/DialogsContainer";
import Profile from "./pages/Profile/Profile";


const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Wrapper>
          <Header />
          <StyledMain>
            <Nav />
            <Main>
              <Route
                path="/profile"
                render={() =><Profile />}
              />
              <Route
                path="/dialogs"
                render={()=><DialogsContainer />}  
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
