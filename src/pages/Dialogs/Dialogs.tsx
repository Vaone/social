import { FC } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import styled from "styled-components";
import Chat from "./Chat";
import { DialogsPropsType } from "./DialogsContainer";
import FriendList from "./FriendList.tsx/FriendList";

const Dialogs:FC<DialogsPropsType> = ({friendList, messageList}) => {
  return (
    <div>
      <Router>
        <StyledDialogs>
          <FriendList friendList={friendList} />
          <Switch>
            {friendList.map((list) => (
              <Route
                key={list.friendId}
                path={`/dialogs/${list.friendId}`}
                render={(props) => (
                  <Chat {...props} messageList={messageList[list.friendId]} />
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