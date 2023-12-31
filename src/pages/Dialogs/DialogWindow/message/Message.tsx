import { MessageType } from "../../../../state/state";
import s from "./Message.module.css";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
  message: MessageType;
};

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
  return (
    <div className={s.message}>
      <div className={s.imageAndText}>
        <img src={props.message.user.avatar} />
        <div className={s.text}>
          <div className={s.name}>{props.message.user.name}</div>
          <pre className={s.messageText}>{props.message.message.text}</pre>
        </div>
      </div>
      <div className={s.time}>{props.message.message.time}</div>
    </div>
  );
};

export default Message;
