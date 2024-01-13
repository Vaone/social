import { FC } from "react";
import styled from "styled-components";
import Header from "./layout/Header";
import Nav from "./layout/Nav";
import Main from "./layout/Main";
import Profile from "./pages/Profile/Profile";
import Dialogs from "./pages/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import { ActionsTypes, stateType } from "./state/state";

type AppPropsType = {
  state: stateType,
  dispatch: (action: ActionsTypes)=>void,
}

const App:FC<AppPropsType> = ({state, dispatch}) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Wrapper>
          <Header />
          <StyledMain>
            <Nav />
            <Main>
              <Route path='/profile' render={()=> <Profile 
              state={state.ProfilePage} 
              dispatch={dispatch} />}/>
              <Route path='/dialogs' render={()=> <Dialogs state={state.DialogsPage}/>}/>
            </Main>
          </StyledMain>
        </Wrapper>
      </div>
    </BrowserRouter>
  );
}

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
