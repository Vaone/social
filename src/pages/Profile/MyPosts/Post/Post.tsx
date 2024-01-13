import { FC } from "react";
import styled from "styled-components";
import { MessagesType } from "../MyPosts";

const Post: FC<MessagesType> = ({ id, message, likesCount, ...props }) => {
  return (
    <StyledPost>
      {props.index}. {message}
      <StyledLikes>
        <span>{likesCount}</span>
      </StyledLikes>
    </StyledPost>
  );
};

export default Post;
const StyledPost = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const StyledLikes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 40px;
  height: 36px;
  margin-top: 10px;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 20px;
    height: 32px;
    border-radius: 20px 20px 0 0;
    background-color: #ffffffa0;
  }

  &:before {
    left: 20px;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }

  & > span {
    z-index: 1;
    color: #9b0101;
    transform: translate(1px, -3px);
  }
`;
