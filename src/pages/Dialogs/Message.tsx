import React, { FC } from "react";
import styled from "styled-components";
import { MessageType } from "./Dialogs";

type MessagePropsType = {
  message: MessageType;
};

const Message: FC<MessagePropsType> = ({ message }) => {
  return (
    <div>
      {message.sender === "Me" ? (
        <StyledMessageMe>
          <StyledNameMe>{message.sender}</StyledNameMe>
          <StyledMessageTextMe>{message.text}</StyledMessageTextMe>
          <StyledTimeMe>{message.time}</StyledTimeMe>
        </StyledMessageMe>
      ) : (
        <StyledMessageFr>
          <StyledNameFr>{message.sender}</StyledNameFr>
          <StyledMessageTextFr>{message.text}</StyledMessageTextFr>
          <StyledTimeFr>{message.time}</StyledTimeFr>
        </StyledMessageFr>
      )}
    </div>
  );
};

export default Message;

const StyledMessageMe = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 24px;
`;
const StyledMessageTextMe = styled.div`
  color: #fff;
  background-color: #0066cc;
  padding: 8px 13px;
  border-radius: 10px;
  margin-right: 12px;

  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;

  position: relative;

  &:after {
    content: "";
    width: 10px;
    height: 10px;

    right: -12px; /* Положение треугольника */
    border: 12px solid transparent; /* Прозрачные границы */
    border-bottom: 12px solid #0066cc;
    position: absolute;
    bottom: 0;
  }
`;
const StyledNameMe = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
`;
const StyledTimeMe = styled.div`
  display: flex;
  justify-content: flex-end;
  font-family: "Montserrat", sans-serif;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  margin-right: 10px;
`;

const StyledMessageFr = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 30px;
`;
const StyledMessageTextFr = styled.div`
  color: #000;
  background-color: #F5F7FB;
  padding: 8px 13px;
  border-radius: 10px;
  margin-right: 12px;

  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;

  position: relative;

  &:after {
    content: '';
  width: 10px;
  height: 10px;

  left: -12px; /* Положение треугольника */
  border: 12px solid transparent; /* Прозрачные границы */
  border-bottom: 12px solid #F5F7FB;
  position: absolute;
  bottom: 0;
  }
`;
const StyledNameFr = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
`;
const StyledTimeFr = styled.div`
  display: flex;
  justify-content: flex-end;
  font-family: "Montserrat", sans-serif;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  margin-right: 10px;
`;
