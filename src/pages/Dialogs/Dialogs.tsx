import { FC } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import styled from "styled-components";
import { DialogActionTypes, DialogPageType } from "../../redux/dialogPage-reducer";
import Chat from "./Chat";
import FriendList from "./FriendList.tsx/FriendList";

type DialogsPropsType = {
  state: DialogPageType,
  dispatch: (action: DialogActionTypes)=>void,
}

const Dialogs:FC<DialogsPropsType> = ({state, dispatch}) => {
  return (
    <div>
      <Router>
        <StyledDialogs>
          <FriendList friendList={state.friendList} />
          <Switch>
            {state.friendList.map((list) => (
              <Route
                key={list.friendId}
                path={`/dialogs/${list.friendId}`}
                render={(props) => (
                  <Chat {...props} messageList={state.messageList[list.friendId]} />
                )}
              />
            ))}
          </Switch>
        </StyledDialogs>
      </Router>
    </div>
  );
};

export default Dialogs;

const StyledDialogs = styled.div`
  display: flex;
`