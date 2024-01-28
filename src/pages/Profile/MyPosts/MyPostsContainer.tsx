import { connect } from "react-redux";
import { addPostAC, changePostAC, PostType } from "../../../redux/profilePage-reducer";
import { AppDispatch, RootState } from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

type MapStateToPropsType = {
  posts: PostType[];
  newPostText: string;
}
type MapDispatchToPropsType = {
  onChangeInput: (text: string)=>void,
  onClickAddPost: ()=>void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType;
const mapStateToProps = (state: RootState):MapStateToPropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapToDispatch = (dispatch: AppDispatch):MapDispatchToPropsType => {
  return {
    onChangeInput: (text: string)=>{dispatch(changePostAC(text))},
    onClickAddPost: ()=>{
      dispatch(addPostAC())
      dispatch(changePostAC(""))
    },
  }
}
export const MyPostsContainer = connect(mapStateToProps, mapToDispatch)(MyPosts)
