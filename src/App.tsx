import React from 'react';
import styled from 'styled-components';
import Nav from './layout/Nav';
import Main from './layout/Main';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import DialogsContainer from './pages/Dialogs/DialogsContainer';
import UsersContainer from './pages/Users/UsersContainer';
import ProfileContainer from './pages/Profile/ProfileContainer';
import HeadersContainer from './layout/HeaderContainer';
import Login from './pages/Login/Login';
import { Spin } from 'antd';
import { AppMapStateToPropsType } from './AppContainer';

class App extends React.Component<AppMapStateToPropsType> {
  render(): React.ReactNode {
    const { isInitialized, isAuth } = this.props;

    if (!isInitialized) {
      return (
        <div
          style={{
            position: 'fixed',
            top: '30%',
            textAlign: 'center',
            width: '100%'
          }}
        >
          <Spin />
        </div>
      );
    }

    return (
      <BrowserRouter>
        <div className="App">
          <Wrapper>
            <HeadersContainer />
            <StyledMain>
              <Nav />
              <Main>
                <Switch>
                  <Route exact path="/">
                    <h1>WelcomePage</h1>
                  </Route>
                  <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                  <Route path="/dialogs" render={() => <DialogsContainer />} />
                  <Route path="/users" render={() => <UsersContainer />} />
                  <Route path="/login" render={() => <Login />} />
                  <Route path="/404" render={() => <h1>404: PAGE NOT FOUND</h1>} />
                  <Route path="*">
                    <Redirect to="/404" />
                  </Route>
                </Switch>
              </Main>
            </StyledMain>
          </Wrapper>
        </div>
      </BrowserRouter>
    );
  }
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
