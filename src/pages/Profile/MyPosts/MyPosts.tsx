import React, { FC, useState } from "react";
import styled from "styled-components";
import { v1 } from "uuid";
import Post from "./Post/Post";

export type MessagesType = {
  id: string
  message: string
  index?: number
}

const MyPosts: FC = () => {

  let [posts, setPosts] = useState<MessagesType[]>([
    { id: v1(), message: "asd1" },
    { id: v1(), message: "asd2" },
    { id: v1(), message: "asd3" },
    { id: v1(), message: "asd4" },
  ]);

  return (
    <div>
      {posts.map((post, index)=><Post key={post.id} message={post.message} id={post.id} index={index+1}/>)}
    </div>
  );
};

export default MyPosts;
