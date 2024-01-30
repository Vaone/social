import { connect } from "react-redux";
import { AppDispatch, RootState } from "../../redux/redux-store";
import {
  followHandlerAC,
  setUsersAC,
  UserType,
} from "../../redux/usersPage-reducer";
import Users from "./Users";

type MapStateToPropsType = {
  users: UserType[];
};

type MapDispatchToPropsType = {
  followHandler: (userId: string) => void;
  setUsers: (users: UserType[]) => void;
};

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: RootState) => {
  return {
    users: state.usersPage,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
  return {
    followHandler: (userId: string) => {
      dispatch(followHandlerAC(userId));
    },
    setUsers: (users: UserType[]) => {
      dispatch(setUsersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
