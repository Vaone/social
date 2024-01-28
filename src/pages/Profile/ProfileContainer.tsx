import { FC } from "react";
import {
  addPostAC,
  changePostAC,
  ProfilePageActionsTypes,
  ProfilePageType,
} from "../../redux/profilePage-reducer";
import Profile from "./Profile";

type ProfilePropsType = {
  state: ProfilePageType;
  dispatch: (action: ProfilePageActionsTypes) => void;
};

const ProfileContainer: FC<ProfilePropsType> = ({ state, dispatch }) => {
  const onChangeInput = (text: string) => {
    dispatch(changePostAC(text));
  };
  const onClickAddPost = () => {
    dispatch(addPostAC());
    dispatch(changePostAC(""));
  };

  return (
    <Profile
      posts={state.posts}
      newPostText={state.newPostText}
      onChangeInput={onChangeInput}
      onClickAddPost={onClickAddPost}
    />
  );
};

export default ProfileContainer;
