import { ChangeEvent, FC } from "react";
import styled from "styled-components";
import {ProfilePageActionsTypes, addPostAC, changePostAC, PostType, ProfilePageType} from "../../../redux/profilePage-reducer"
import Post from "./Post/Post";

export interface MessagesType extends PostType {
  index?: number;
}

type MyPostsProps = {
  state: ProfilePageType;
  dispatch: (action: ProfilePageActionsTypes)=>void,
};

const MyPosts: FC<MyPostsProps> = ({ state, dispatch }) => {
  const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(changePostAC(e.currentTarget.value))
  }
  const onClickAddPostHandler = () => {
    dispatch(addPostAC())
    dispatch(changePostAC(''))
  }

  return (
    <div>
      {state.posts.map((post, index) => (
        <Post
          key={post.id}
          message={post.message}
          id={post.id}
          index={index + 1}
          likesCount={post.likesCount}
        />
      ))}

      <StyledCustomInput onChange={onChangeInputHandler} value={state.newPostText}/>
      <StyledBtn onClick={onClickAddPostHandler}> + </StyledBtn>
    </div>
  );
};

export default MyPosts;


const StyledCustomInput = styled.textarea`
  background-color: #F5F7FB;
  width: 50%;
  resize: none;
  min-height: 100px;
  margin-right: 44px;
  overflow-y: hidden;
  border-radius: 20px;
  padding: 12px 24px;

  font-family: 'Montserrat', sans-serif;
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
`
const StyledBtn = styled.button`
  background-color: #0066CC;
  padding: 10px 39px;
  border: none;
  color: #fff;
  border-radius: 20px;

  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  cursor: pointer;

  &:hover {
    background-color: #0357aa;
  }

`