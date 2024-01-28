import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import styled from "styled-components";
import Chat from "./Chat";
import FriendList from "./FriendList.tsx/FriendList";

export type MessageType = {
  messageId: string;
  text: string;
  time: string;
  sender: string;
};
type messagesListType = {
  [messageId: string]: MessageType[];
};
const Dialogs = ({}) => {
  const messageList: messagesListType = {
    "1": [
      { messageId: "1", text: "Hello", time: "14:14", sender: "Stepan" },
      { messageId: "2", text: "Hello", time: "14:14", sender: "Me" },
    ],
    "2": [
      { messageId: "1", text: "Hello", time: "14:14", sender: "Viktor" },
      { messageId: "2", text: "Hello", time: "14:14", sender: "Me" },
    ],
    "3": [
      { messageId: "1", text: "Hello", time: "14:14", sender: "Yi" },
      { messageId: "2", text: "Hello", time: "14:15", sender: "Me" },
      { messageId: "3", text: "Hs", time: "14:16", sender: "Me" },
      { messageId: "3", text: "Hs", time: "14:16", sender: "Yi" },
    ],
  };
  const friendList = [
    { friendId: "1", name: "Stepan" },
    { friendId: "2", name: "Viktor" },
    { friendId: "3", name: "Yi" },
  ];

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