import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { MessageType } from "./Dialogs";
import Message from "./Message";

type ChatPropsType = {
  name?: string;
  messageList: MessageType[];
};

const Chat: FC<ChatPropsType> = ({ messageList }) => {
  return <StyledChat>
    <div> 
      {messageList.map(m=><Message message={m}/>)}
    </div>
  </StyledChat>;
};

export default Chat;

const StyledChat = styled.div`
  display: flex;
  padding: 10px;
  margin: 10px;
  min-width: 30%;
`;
