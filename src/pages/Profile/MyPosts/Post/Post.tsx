import React, { FC, useState } from "react";
import styled from "styled-components";
import { MessagesType } from "../MyPosts";

const Post:FC<MessagesType> = ({id, message, ...props}) => {
  return (
    <div>
      {props.index}.{message}
    </div>
  )
};

export default Post;