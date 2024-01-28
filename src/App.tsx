import { FC } from "react";
import styled from "styled-components";
import Header from "./layout/Header";
import Nav from "./layout/Nav";
import Main from "./layout/Main";
import { BrowserRouter, Route } from "react-router-dom";
import { ProfilePageActionsTypes } from "./redux/profilePage-reducer";
import { AppRootReducerStateType } from "./redux/redux-store";
import { DialogActionTypes } from "./redux/dialogPage-reducer";
import DialogsContainer from "./pages/Dialogs/DialogsContainer";
import ProfileContainer from "./pages/Profile/ProfileContainer";

type AppPropsType = {
  state: AppRootReducerStateType;
  dispatch: (action: ProfilePageActionsTypes | DialogActionTypes) => void;
};

const App: FC<AppPropsType> = ({ state, dispatch }) => {
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
                render={() => (
                  <ProfileContainer
                    state={state.profilePage}
                    dispatch={dispatch}
                  />
                )}
              />
              <Route
                path="/dialogs"
                render={() => (
                  <DialogsContainer
                    state={state.dialogPage}
                    dispatch={dispatch}
                  />
                )}
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
