import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  addPost,
  changePost,
  PostType,
} from "../../../redux/profilePage-reducer";
import { RootState } from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

const mapStateToProps = (state: RootState): MapStateToPropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

export const MyPostsContainer = compose<React.ComponentType>(
  connect(mapStateToProps, { changePost, addPost })
)(MyPosts);

type MapStateToPropsType = {
  posts: PostType[];
  newPostText: string;
};
type MapDispatchToPropsType = {
  changePost: (text: string) => void;
  addPost: () => void;
};

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType;
