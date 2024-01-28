import { FC } from "react";
import styled from "styled-components";
import Header from "./layout/Header";
import Nav from "./layout/Nav";
import Main from "./layout/Main";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import { ProfilePageActionsTypes } from "./redux/profilePage-reducer";
import { AppRootReducerStateType } from "./redux/redux-store";
import Dialogs from "./pages/Dialogs/Dialogs";

type AppPropsType = {
  state: AppRootReducerStateType,
  dispatch: (action: ProfilePageActionsTypes)=>void,
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
              state={state.profilePage} 
              dispatch={dispatch} />}/>
              <Route path='/dialogs' render={()=> <Dialogs />}/>
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
