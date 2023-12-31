import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { message0 } from "../../../../state/state";
import { MessageType } from "../../../../state/state";
import s from "./MessageSender.module.css";
import Message from '../message/Message'


const MessageSender = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [text, setText] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.currentTarget.value);
  };

  useEffect(() => {
    if (textareaRef?.current) {
      textareaRef.current.style.height = "0px";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  const addMessage = () => {
    setMessages([
      ...messages,
      {
        id: messages.length ? messages.length + 1 : 1,
        user: message0.user,
        message: {
          text,
          time: new Date().toTimeString().slice(0, 5),
        },
      },
    ]);
    setTimeout(() => setText(""), 4);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    e.key === "Enter" && e.shiftKey && addMessage();
  };

  return (
    <>
      {messages.map((m) => (
        <Message key={"message" + m.id} message={m} />
      ))}

      <div className={s.sendForm}>
        <textarea
          className={s.textarea}
          ref={textareaRef}
          title={"Shift+Enter for send"}
          placeholder={"Type your message"}
          value={text}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <button className={s.button} onClick={addMessage}>
          Send
        </button>
      </div>
    </>
  );
};

export default MessageSender;
