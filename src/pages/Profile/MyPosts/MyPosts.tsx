import { FC, useState } from "react";
import { PostType } from "../../..";
import CustomInput from "../../../component/CustomInput";
import Post from "./Post/Post";

export interface MessagesType extends PostType {
  index?: number;
}

type MyPostsProps = {
  initialPosts: PostType[];
};

const MyPosts: FC<MyPostsProps> = ({ initialPosts }) => {
  let [posts, setPosts] = useState<PostType[]>(initialPosts);

  const addPost = (text: string) => {
    if (text.trim()==='') {
      return;
    }
    const newPost = {
      id: Date.now().toString(),
      message: text,
      likesCount: 0
    };
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      {posts.map((post, index) => (
        <Post
          key={post.id}
          message={post.message}
          id={post.id}
          index={index + 1}
          likesCount={post.likesCount}
        />
      ))}

      <CustomInput postFunc={addPost} />
    </div>
  );
};

export default MyPosts;
