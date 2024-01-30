import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CustomInput from "../../component/CustomInput";
import { MessageType } from "../../redux/dialogPage-reducer";
import Message from "./Message";

type ChatPropsType = {
  name?: string,
  messageList: MessageType[],
  friendId: string,
  sendNewMessage: (text:string, friendId: string)=>void,
};

const Chat: FC<ChatPropsType> = ({ messageList,friendId, sendNewMessage }) => {

  const sendNewMessageHandler = (newMessage: string) => {
    sendNewMessage(newMessage, friendId)
  }

  return <StyledChat>
    <div> 
      {messageList.map(m=><Message key={m.messageId} message={m}/>)}
    </div>

    <CustomInput postFunc={(newMessage:string)=>sendNewMessageHandler(newMessage)}/>
  </StyledChat>;
};

export default Chat;

const StyledChat = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  min-width: 40%;
`;
