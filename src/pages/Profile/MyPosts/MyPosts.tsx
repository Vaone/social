import { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { MyPostsPropsType } from "./MyPostsContainer";
import Post from "./Post/Post";

const MyPosts: FC<MyPostsPropsType> = ({
  posts,
  newPostText,
  onChangeInput,
  onClickAddPost,
}) => {
  const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChangeInput(e.currentTarget.value);
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

      <StyledCustomInput onChange={onChangeInputHandler} value={newPostText} />
      <StyledBtn onClick={onClickAddPost}> + </StyledBtn>
    </div>
  );
};

export default MyPosts;

const StyledCustomInput = styled.textarea`
  background-color: #f5f7fb;
  width: 50%;
  resize: none;
  min-height: 100px;
  margin-right: 44px;
  overflow-y: hidden;
  border-radius: 20px;
  padding: 12px 24px;

  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #00000099;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #0083fd61;
    color: #000;
  }
`;
const StyledBtn = styled.button`
  background-color: #0066cc;
  padding: 10px 39px;
  border: none;
  color: #fff;
  border-radius: 20px;

  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  cursor: pointer;

  &:hover {
    background-color: #0357aa;
  }
`;
